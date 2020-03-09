<?php

namespace App\Http\Controllers;

use App\Vipadvertiser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VipadvertiserController extends Controller
{
    /**
     * Show VIP Advertisments.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function show()
    {

        $vipData = Vipadvertiser::first();
        $data = [
            'title' => $vipData->title,
            'advertisername' => $vipData->advertisername,
            'text' => $vipData->text,
            'shopname' => $vipData->shopname,
            'phonenumbers' => json_decode($vipData->phonenumbers),
            'contactnumber' => json_decode($vipData->contactnumber),
        ];

        return response()->json($data, 200);
    }



    /**
     * Update VIP Advertisments.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function update(Request $request)
    {
        $is_admin = Auth::guard()->user()->is_admin;

        if ($is_admin == 1) {

            $vipData = Vipadvertiser::first();
            $vipData->title = htmlspecialchars($request->title);
            $vipData->advertisername = htmlspecialchars($request->advertisername);
            $vipData->text = htmlspecialchars($request->text);
            $vipData->shopname = htmlspecialchars($request->shopname);
            $vipData->phonenumbers = json_encode(gettype($request->phonenumbers) == 'array' ? $request->phonenumbers : explode(",", $request->phonenumbers));
            $vipData->contactnumber = json_encode(gettype($request->contactnumber) == 'array' ? $request->contactnumber : explode(",", $request->contactnumber));
            $vipData->save();
            return response()->json(
                $vipData,
                200
            );
        }



        return response()->json('Permission error', 400);
    }
}
