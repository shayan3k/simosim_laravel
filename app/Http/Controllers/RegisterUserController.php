<?php

namespace App\Http\Controllers;

use App\User;
use Ghasedak\GhasedakApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterUserController extends Controller
{

    private $smsToken = '';
    /**
     * Create a new User
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        if ($request->phonenumber != '' || $request->name != '' || $request->password != '') {

            $user = new User();
            $user->name = $request->name;
            $user->phonenumber = $request->phonenumber;
            $user->phonenumber_verified_at =  null;
            $user->password  = Hash::make($request->password);
            $user->remember_token = $request->smsToken;
            $user->active = true;
            $user->is_admin = false;
            $user->save();
        } else {
            return response()->json(['message' => "phoneNumber , password , name are empty"], 500);
        }



        return response()->json(['message' => "Successfully Registered!"], 200);
    }


    /**
     * Create a new User
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendsms(Request $request)
    {


        $this->smsToken = rand(10000, 99999);

        $message = "تست ارسال وب سرویس قاصدک" . 'password=' . $this->smsToken;
        $lineNumber = "10008566";
        $receptor = $request->phonenumber;
        $api = new GhasedakApi(env('GHASEDAK_APIKEY'));
        $api->SendSimple($receptor, $message, $lineNumber);

        return response()->json(['message' => "Sms has been sent = " . $this->smsToken, 'smsToken' => $this->smsToken], 200);
    }
}
