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
     * * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function showAll(Request $request)
    {
        $data = [];

        $conditions = [];

        if ($request->location)
            $conditions += ['location' => $request->location];
        if ($request->code)
            $conditions += ['code' => $request->code];
        if ($request->value)
            $conditions += ['value' => $request->value];
        if ($request->rond)
            $conditions += ['rond' => $request->rond];
        if ($request->status)
            $conditions += ['simstatus' => $request->status];

        // if ($request->priceRange) {
        //     array_push($condition, ['price', '>=',  $request->priceRange]);
        // }

        if ($request->phonenumber)
            $conditions = ['phonenumber' => $request->phonenumber];


        $conditions += ['published' => '1'];


        $advertisments = Advertisment::orderBy('updated_at', 'desc')->where($conditions)->paginate('50', ['*'], 'page', $request->page);
        foreach ($advertisments as $item) {
            $user = $item->user_id;
            $user = User::find($user);
            $sellerPhonenumber = 'No phoneNumber';
            $sellerName = 'No Name';
            if ($user) {
                $sellerPhonenumber = $user->phonenumber;
                $sellerName = $user->name;
            }
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
                'sellerphonenumber' => $sellerPhonenumber,
                'sellername' => $sellerName,
                'updated_at' => $item->updated_at
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
        $advertisments = Advertisment::where(['sale' => 'فوری', 'published' => '1'])->orderBy('updated_at', 'desc')->take(15)->get();
        // User::id($advertisments->user_id);
        foreach ($advertisments as $item) {
            $user = $item->user_id;
            $user = User::find($user);
            $sellerPhonenumber = 'No phoneNumber';
            $sellerName = 'No Name';
            if ($user) {
                $sellerPhonenumber = $user->phonenumber;
                $sellerName = $user->name;
            }
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
                'sellerphonenumber' => $sellerPhonenumber,
                'sellername' => $sellerName,
                'updated_at' => $item->updated_at
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
        $advertisments = Advertisment::where(['value' => 'طلایی', 'published' => '1', 'sale' => ''])->orderBy('updated_at', 'desc')->take(30)->get();
        foreach ($advertisments as $item) {
            $user = $item->user_id;
            $user = User::find($user);
            $sellerPhonenumber = 'No phoneNumber';
            $sellerName = 'No Name';
            if ($user) {
                $sellerPhonenumber = $user->phonenumber;
                $sellerName = $user->name;
            }
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
                'sellerphonenumber' => $sellerPhonenumber,
                'sellername' => $sellerName,
                'updated_at' => $item->updated_at
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
        $advertisments = Advertisment::where(['value' => 'نقره ای', 'published' => '1', 'sale' => ''])->orderBy('updated_at', 'desc')->take(30)->get();
        // User::id($advertisments->user_id);
        foreach ($advertisments as $item) {
            $user = $item->user_id;
            $user = User::find($user);
            $sellerPhonenumber = 'No phoneNumber';
            $sellerName = 'No Name';
            if ($user) {
                $sellerPhonenumber = $user->phonenumber;
                $sellerName = $user->name;
            }
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
                'sellerphonenumber' => $sellerPhonenumber,
                'sellername' => $sellerName,
                'updated_at' => $item->updated_at
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
        $advertisments = Advertisment::where(['value' => 'برنز', 'published' => '1', 'sale' => ''])->orderBy('updated_at', 'desc')->take(30)->get();
        // User::id($advertisments->user_id);
        foreach ($advertisments as $item) {
            $user = $item->user_id;
            $user = User::find($user);
            $sellerPhonenumber = 'No phoneNumber';
            $sellerName = 'No Name';
            if ($user) {
                $sellerPhonenumber = $user->phonenumber;
                $sellerName = $user->name;
            }
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
                'sellerphonenumber' => $sellerPhonenumber,
                'sellername' => $sellerName,
                'updated_at' => $item->updated_at
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
    public function showMeLive()
    {
        $data = [];
        $advertisments = Advertisment::where(['user_id' => Auth::user()->id, 'published' => 1])->orderBy('updated_at', 'desc')->paginate(15);
        // User::id($advertisments->user_id);
        foreach ($advertisments as $item) {
            $user = $item->user_id;
            $user = User::find($user);
            $sellerPhonenumber = 'No phoneNumber';
            $sellerName = 'No Name';
            if ($user) {
                $sellerPhonenumber = $user->phonenumber;
                $sellerName = $user->name;
            }
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
                'sellerphonenumber' => $sellerPhonenumber,
                'sellername' => $sellerName,
                'updated_at' => $item->updated_at
            ];

            array_push($data, $new);
        }

        return response()->json($data, 200);
    }


    /**
     * Show Me sold Advertisments.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function showMeSold()
    {
        $data = [];
        $advertisments = Advertisment::where(['user_id' => Auth::user()->id, 'published' => 0])->orderBy('updated_at', 'desc')->paginate(15);
        // User::id($advertisments->user_id);
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
                'updated_at' => $item->updated_at
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
        $advertisment->sale = $request->sale ? 'فوری' : '';
        $advertisment->published =  false;
        $advertisment->created_at = NOW();
        $advertisment->updated_at = NOW();

        auth()->guard()->user()->advertisments()->save($advertisment);

        response()->json('OK', 200);
    }



    /**
     * Delete Advertisments for Users.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function deleteAdvertismentUser(Request $request)
    {


        $advertisment = Advertisment::findOrFail($request->id);

        if ($advertisment->user_id == Auth::guard()->user()->id) {
            $advertisment->published = false;
            $advertisment->save();
            return response()->json('OK', 200);
        }


        return response()->json($request->id, 400);
    }



    /**
     * BEROZRESANI for Users.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function berozresaniAdvertismentUser(Request $request)
    {


        $advertisment = Advertisment::findOrFail($request->id);

        if ($advertisment->user_id == Auth::guard()->user()->id) {
            $advertisment->updated_at = NOW();
            $advertisment->save();
            return response()->json('OK', 200);
        }


        return response()->json($request->id, 400);
    }



    /**
     * Show Advertisments to Admin.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function showAllAdmin(Request $request)
    {
        $data = [];
        $conditions = [];
        if ($request->phonenumber)
            $conditions += ['phonenumber' => $request->phonenumber];
        if ($request->location)
            $conditions += ['location' => $request->location];
        if ($request->code)
            $conditions += ['code' => $request->code];
        if ($request->value)
            $conditions += ['value' => $request->value];
        if ($request->rond)
            $conditions += ['rond' => $request->rond];
        if ($request->simstatus)
            $conditions += ['simstatus' => $request->simstatus];
        if ($request->sale)
            $conditions += ['sale' => $request->sale];
        if ($request->published)
            $conditions += ['published' => $request->published];


        $advertisments = Advertisment::orderBy('created_at', 'desc')->where($conditions)->paginate(12);
        foreach ($advertisments as $item) {
            $user = $item->user_id;
            $user = User::find($user);
            $sellerPhonenumber = 'No phoneNumber';
            $sellerName = 'No Name';
            if ($user) {
                $sellerPhonenumber = $user->phonenumber;
                $sellerName = $user->name;
            }
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
                'sellerphonenumber' => $sellerPhonenumber,
                'sellername' => $sellerName,
                'updated_at' => $item->updated_at
            ];
            if ($request->sellerphonenumber) {
                if ($request->sellerphonenumber == $sellerPhonenumber) {
                    array_push($data, $new);
                } else {
                    continue;
                }
            } else {
                array_push($data, $new);
            }
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

            $item->phonenumber = $request->phoneNumber;
            $item->simStatus = $request->simStatus;
            $item->rond = $request->rond;
            $item->code = $request->code;
            $item->location = $request->location;
            $item->value = $request->value;
            $item->price = $request->price;
            $item->secondprice = $request->secondPrice;
            $item->published = $request->published;
            $item->text = $request->text;
            $item->sale = $request->sale == null ? '' : $request->sale;
            $item->save();


            return response()->json($item, 200);
        }


        return response()->json('Permission Error', 400);
    }
}
