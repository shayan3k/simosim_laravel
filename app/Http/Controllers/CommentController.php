<?php

namespace App\Http\Controllers;

use App\Advertisment;
use App\User;
use \Illuminate\Http\Request;
use \Laravelista\Comments\CommentControllerInterface;
use \Laravelista\Comments\Comment;
use \Illuminate\Routing\Controller;
use \Illuminate\Foundation\Validation\ValidatesRequests;
use \Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use \Spatie\Honeypot\ProtectAgainstSpam;

class CommentController extends Controller
{

    use ValidatesRequests, AuthorizesRequests;

    public function __construct()
    {
        $this->middleware('web');

        if (config('comments.guest_commenting') == true) {
            $this->middleware('auth')->except(['store', 'show']);
            $this->middleware(ProtectAgainstSpam::class)->only('store');
        } else {
            // $this->middleware('auth')->except(['store', 'show']);
        }
    }




    /**
     * show comments related to an advertisment.
     */
    public function showAllAdmin(Request $request, Comment $comment)
    {

        $user = Auth::user();

        if ($user->is_admin == 1) {
            if (isset($request->page)) {
                //get all comments
                $comments = $comment->orderBy('created_at', 'desc')->paginate('10', ['*'], 'page', $request->page);
                //generate the success response
                $response_data = [];

                foreach ($comments as $comment) {

                    $item = Advertisment::find($comment->commentable_id);
                    array_push(
                        $response_data,

                        [
                            'id' =>  $comment->id,
                            'text' => $comment->comment,
                            'approved' => $comment->approved,
                            'created_at' => $comment->created_at,
                            'updated_at' => $comment->updated_at,
                            'advertiement' => $item ? $item : null,
                            'commenter' => $comment->commenter,

                        ]
                    );
                }

                return count($response_data)  ? response(['data' => $response_data], 200) : response(['message' => 'no comments for this advertisment'], 201);
            }
            return response(['message0' => $request->page], 400);
        }
        //generate the error response
        return response(['message1' => $user], 400);
    }





    /**
     * show comments related to an advertisment.
     */
    public function show(Request $request, Comment $comment)
    {
        if (isset($request->id)) {
            //get the model data
            $advertisment = Advertisment::findOrFail($request->id);
            //get the relevant comments for a model
            $comments = $comment->where(['commentable_id' =>  $advertisment->id, 'approved' => true])->orderBy('created_at', 'desc')->get();
            //generate the success response
            return count($comments)  ? response(['data' => $comments], 200) : response(['message' => 'no comments for this advertisment'], 201);
        }
        //generate the error response
        return response(['message' => 'bad request'], 400);
    }

    /**
     * Creates a new comment for given advertisment.
     */
    public function store(Request $request)
    {



        if (isset($request->advertisment_id)) {
            //get the model and user data
            $advertisment = Advertisment::findOrFail($request->advertisment_id);
            $user = Auth::user();

            //generate an instance of comment class
            $commentClass = config('comments.model');
            $comment = new $commentClass;

            //config the class props
            $comment->commentable()->associate($advertisment);
            $comment->commenter()->associate($user);
            $comment->comment = htmlspecialchars(strip_tags($request->comment));
            $comment->approved = !config('comments.approval_required');
            $comment->save();

            //return the sucess response
            return response([
                'message' => 'stored successfully'
            ], 200);
        }
        //return the error response
        return response(['message' => 'bad request'], 400);
    }

    /**
     * Updates the message of the comment.
     */
    public function update(Request $request, Comment $comment)
    {


        if (isset($request->comment_id)) {
            //check if user is authorized
            if (!Auth::check())
                return response(['message' => 'not authorized'], 400);

            //get comment and user data
            $comment = $comment->where('id', $request->comment_id)->first();
            $user_id = Auth::check() ? Auth::user()->id : '1';

            //if user is not authorized for this comment
            if ($comment->commenter_id ==  $user_id || Auth::user()->is_admin == 1) {

                //config the class props
                $comment->comment = isset($request->text) ? htmlspecialchars(strip_tags($request->text)) : $comment->comment;

                $comment->approved = isset($request->approved) ? $request->approved : $comment->approved;

                $comment->save();

                //return the sucess response
                return response([
                    'comment_id' => $request->comment_id,
                    'comment' => $request->message ? $request->message : 'comment message for now',

                ], 200);
            }
            return response(['message' => 'not authorized'], 400);
        }
        //return the error response
        return response(['message' => 'bad request'], 400);
    }

    /**
     * Deletes a comment.
     */
    public function destroy(Request $request, Comment $comment)
    {
        if (isset($request->comment_id)) {
            //check if user is authorized
            if (!Auth::check())
                return response(['message' => 'not authorized'], 400);

            //get comment and user data
            $comment = $comment->where('id', $request->comment_id)->first();
            $user_id = Auth::check() ? Auth::user()->id : '1';

            //if user is not authorized for this comment
            if ($comment->commenter_id ==  $user_id || Auth::user()->is_admin == 1) {

                //config the class props
                $comment->delete();

                //return the sucess response
                return response([
                    'message' => 'Deleted'
                ], 200);
            }
            return response(['message' => 'not authorized'], 400);
        }
        //return the error response
        return response(['message' => 'bad request'], 400);
    }

    /**
     * Creates a reply "comment" to a comment.
     */
    public function reply(Request $request, Comment $comment)
    {
        $this->authorize('reply-to-comment', $comment);

        $this->validate($request, [
            'message' => 'required|string'
        ]);

        $commentClass = config('comments.model');
        $reply = new $commentClass;
        $reply->commenter()->associate(auth()->user());
        $reply->commentable()->associate($comment->commentable);
        $reply->parent()->associate($comment);
        $reply->comment = $request->message;
        $reply->approved = !config('comments.approval_required');
        $reply->save();

        return redirect()->to(url()->previous() . '#comment-' . $reply->id);
    }
}
