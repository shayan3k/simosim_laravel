<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    /**
     * Show all users to admin
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function showAllAdmin(Request $request)
    {
        // $is_admin = Auth::guard()->user()->is_admin;

        // if ($is_admin == 1) {


        $users = User::orderBy('created_at')->paginate(15);
        $newArray = [];

        foreach ($users as $user) {

            array_push($newArray, [
                'id' => $user->id,
                'name' => $user->name,
                'phonenumber' => $user->phonenumber,
                'is_admin' => $user->is_admin,
                'phonenumber_verified_at' => $user->phonenumber_verified_at,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at

            ]);
        }
        return response()->json($newArray, 200);
        // }

        return response()->json('Permission Error', 400);
    }
}
