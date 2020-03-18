<?php

namespace App\Http\Controllers;

use App\User;
use Ghasedak\GhasedakApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterUserController extends Controller
{
    /**
     * Create a new User
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {

        $user = new User();
        $user->name = $request->name;
        $user->phonenumber = $request->username;
        $user->phonenumber_verified_at =  null;
        $user->password  = Hash::make($request->password);
        $user->remember_token = null;
        $user->active = false;
        $user->is_admin = false;
        $user->save();

        $message = "تست ارسال وب سرویس قاصدک" . 'remember_token=' . $user->remember_token;
        $lineNumber = "10008566";
        $receptor = $user->phonenumber;
        $api = new GhasedakApi(env('GHASEDAK_APIKEY'));

        return response()->json(['message' => "Successfully Registered!", 'user' => $user], 200);
    }
}
