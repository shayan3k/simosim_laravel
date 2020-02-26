<?php

namespace App\Http\Controllers;

use App\Advertisment;
use App\User;
use Illuminate\Http\Request;

class AdvertismentController extends Controller
{
    /**
     * Show Advertisments.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function show()
    {
        $data = [];
        $advertisments = Advertisment::take(10)->get();
        // User::id($advertisments->user_id);
        foreach ($advertisments as $item) {
            $user = $item->user_id;
            $user = User::find($user);
            $new = [
                'phonenumber' => $item->phonenumber,
                'location' => $item->location,
                'text' => $item->text,
                'price' => $item->price,
                'secondprice' => $item->secondprice,
                'code' => $item->code,
                'operator' => $item->operator,
                'value' => $item->value,
                'rond' => $item->rond,
                'simstatus' => $item->simstatus,
                'sale' => $item->sale,
                'sellerphonenumber' => $user->phonenumber,
                'sallername' => $user->name
            ];

            array_push($data, $new);
        }

        return response()->json($data, 200);
    }

    /**
     * Show Advertisments.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        var_dump($request);
        $data = $request->only('phonenumber', 'password');
        // if ($token = JWTAuth::attempt($credentials)) {
        //     return $this->respondWithToken($token);
        // }
        return response()->json(['error' => 'Unauthorized'], 401);
    }
}
