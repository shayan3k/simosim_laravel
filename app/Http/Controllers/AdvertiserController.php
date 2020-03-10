<?php

namespace App\Http\Controllers;

use App\Advertiser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Event\RequestEvent;

class AdvertiserController extends Controller
{
    /**
     * Show Advertisments.
     *
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function show()
    {
        $data = [];
        $advertiser = Advertiser::all();
        foreach ($advertiser as $item) {

            $new = [
                'id' => $item->id,
                'name' => $item->name,
                'shopname' => $item->shopname,
                'phonenumbers' => json_decode($item->phonenumbers),
                'contactnumbers' => json_decode($item->contactnumbers),
            ];

            array_push($data, $new);
        }

        return response()->json($data, 200);
    }


    /**
     * DELETE Advertisments.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function delete(Request $request)
    {

        $is_admin = Auth::guard()->user()->is_admin;

        if ($is_admin == 1) {
            $item = Advertiser::findOrFail($request->id)->delete();
            return response()->json('Item was deleted seccessfully', 200);
        }

        return response()->json('Permission Error', 201);
    }



    /**
     * UPDATE Advertisments.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function update(Request $request)
    {

        $is_admin = Auth::guard()->user()->is_admin;

        if ($is_admin == 1) {

            $item = Advertiser::findorfail($request->id);
            $item->name = htmlspecialchars($request->name);
            $item->shopname = htmlspecialchars($request->shopname);
            $item->phonenumbers = json_encode(gettype($request->phonenumbers) == 'array' ? $request->phonenumbers : explode(",", $request->phonenumbers));
            $item->contactnumbers = json_encode(gettype($request->contactnumbers) == 'array' ? $request->contactnumbers : explode(",", $request->contactnumbers));
            $item->save();
            return response()->json(
                $item,
                200
            );
        }

        return response()->json('Permission Error', 201);
    }



    /**
     * CREATE Advertisments.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function create(Request $request)
    {

        $is_admin = Auth::guard()->user()->is_admin;

        if ($is_admin == 1) {

            $item = new Advertiser();
            $item->name = htmlspecialchars($request->name);
            $item->shopname = htmlspecialchars($request->shopname);
            $item->phonenumbers = json_encode(gettype($request->phonenumbers) == 'array' ? $request->phonenumbers : explode(",", $request->phonenumbers));
            $item->contactnumbers = json_encode(gettype($request->contactnumbers) == 'array' ? $request->contactnumbers : explode(",", $request->contactnumbers));

            $item->save();
            return response()->json(
                [
                    'name' => $item->name,
                    'shopname' => $item->shopname,
                    'phonenumbers' => json_decode($item->phonenumbers),
                    'contactnumbers' => json_decode($item->contactnumbers)
                ],
                200
            );
        }

        return response()->json('Permission Error', 201);
    }
}
