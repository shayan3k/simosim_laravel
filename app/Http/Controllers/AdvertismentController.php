<?php

namespace App\Http\Controllers;

use App\Advertisment;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdvertismentController extends Controller
{
    /**
     * Show Advertisments.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function showAll()
    {
        $data = [];
        $advertisments = Advertisment::take(50)->get();
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
     * Show on sale Advertisments.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function showSale()
    {
        $data = [];
        $advertisments = Advertisment::where('sale', 'فوری')->take(15)->get();
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
     * Show GOLD Advertisments.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function showGold()
    {
        $data = [];
        $advertisments = Advertisment::where('value', 'طلایی')->take(30)->get();
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
     * Show SILVER Advertisments.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function showSilver()
    {
        $data = [];
        $advertisments = Advertisment::where('value', 'نقره ای')->take(30)->get();
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
     * Show BRONZE Advertisments.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function showBronze()
    {
        $data = [];
        $advertisments = Advertisment::where('value', 'برنز')->take(30)->get();
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
     * Show MINE Advertisments.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function showMe()
    {
        $data = [];
        $advertisments = Advertisment::where('user_id', Auth::user()->id)->take(10)->get();
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
                'sellername' => $user->name
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
        $advertisment = new Advertisment();
        $advertisment->phonenumber = $request->phonenumber;
        $advertisment->location = $request->location;
        $advertisment->text = $request->text;
        $advertisment->price =  $request->price;
        $advertisment->secondprice = $request->secondprice;
        $advertisment->value = $request->value;
        $advertisment->operator = $request->operator;
        $advertisment->code = $request->code;
        $advertisment->rond =  $request->rond;
        $advertisment->simstatus = $request->simstatus;
        $advertisment->sale = $request->sale;
        $advertisment->published =  false;
        $advertisment->created_at = NOW();
        $advertisment->updated_at = NOW();

        // $user = Auth::user();
        $user = User::find(1);

        $advertisment->user()->associate($user);

        $advertisment->save();
    }


    /**
     * Show Advertisments to Admin.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function showAllAdmin()
    {
        $data = [];
        $advertisments = Advertisment::take(50)->paginate(12);
        foreach ($advertisments as $item) {
            $user = $item->user_id;
            $user = User::find($user);
            $new = [
                'id' => $item->id,
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
                'sellername' => $user->name,
                'published' => $item->published
            ];
            array_push($data, $new);
        }
        // $is_admin = Auth::guard()->user()->is_admin;

        // if ($is_admin == 1) {
        //     return response()->json($data, 200);
        // }

        return response()->json($data, 200);

        // return response()->json('Permission Error', 400);
    }



    /**
     * Delete Advertisments for Admin.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function deleteAdmin(Request $request)
    {

        $is_admin = Auth::guard()->user()->is_admin;

        if ($is_admin == 1) {

            $item  = Advertisment::findOrFail($request->id);
            $item->delete();
            return response()->json('Ok', 200);
        }


        return response()->json('Permission Error', 400);
    }




    /**
     * Update Advertisments for Admin.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function updateAdmin(Request $request)
    {

        $is_admin = Auth::guard()->user()->is_admin;

        if ($is_admin == 1) {

            $item  = Advertisment::findOrFail($request->id);

            $item->phoneNumber = $request->phoneNumber;
            $item->simStatus = $request->simStatus;
            $item->rond = $request->rond;
            $item->code = $request->code;
            $item->location = $request->location;
            $item->value = $request->value;
            $item->price = $request->price;
            $item->secondPrice = $request->secondPrice;
            $item->published = $request->published;
            $item->text = $request->text;
            $item->sale = $request->sale == null ? '' : $request->sale;
            $item->save();

            return response()->json($item, 200);
        }


        return response()->json('Permission Error', 400);
    }
}
