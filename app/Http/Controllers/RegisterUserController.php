<?php

namespace App\Http\Controllers;

use App\User;
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
        $user->is_admin = false;
        $user->save();

        return response()->json(['message' => "Successfully Registered!", 'user' => $user], 200);
    }
}
