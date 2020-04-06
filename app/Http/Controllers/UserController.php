<?php

namespace App\Http\Controllers;

use App\User;
use Ghasedak\GhasedakApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
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
     * send sms for registeration
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendRegisterSMS(Request $request)
    {


        $this->smsToken = rand(10000, 99999);

        $message = ":کد " . $this->smsToken;
        $lineNumber = "10008566";
        $receptor = $request->phonenumber;
        $api = new GhasedakApi(env('GHASEDAK_APIKEY'));
        $api->SendSimple($receptor, $message, $lineNumber);

        return response()->json(['message' => "خیلی خوب. لطفا کد ارسالی به موبایلتون را وارد کنید", 'smsToken' => $this->smsToken], 200);
    }




    /**
     * send sms forgetpassword
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendForgetPasswordSMS(Request $request)
    {

        $this->smsToken = rand(10000, 99999);
        $message = ":کد " . $this->smsToken;
        $lineNumber = "10008566";
        $receptor = $request->phonenumber;
        $api = new GhasedakApi(env('GHASEDAK_APIKEY'));
        $api->SendSimple($receptor, $message, $lineNumber);

        $user = User::where('phonenumber', $request->phonenumber)->first();
        $user->remember_token = $this->smsToken;
        $user->save();

        return response()->json(['message' => "خیلی خوب. لطفا کد ارسالی به موبایلتون را وارد کنید", 'smsToken' => $this->smsToken], 200);
    }





    /**
     * send sms forgetpassword
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function changePassword(Request $request)
    {

        $user = User::where('phonenumber', $request->phonenumber)->first();

        if ($user && $user->remember_token == $request->token) {

            $newPassword = rand(11111111, 99999999);
            $message = ":رمز عبور جدید " . $newPassword;
            $lineNumber = "10008566";
            $receptor = $request->phonenumber;
            $api = new GhasedakApi(env('GHASEDAK_APIKEY'));
            $api->SendSimple($receptor, $message, $lineNumber);


            $user->password  = Hash::make($newPassword);
            $user->save();

            return response()->json(['message' => "خیلی خوب. لطفا کد ارسالی به موبایلتون را وارد کنید", 'smsToken' => $this->smsToken], 200);
        }

        return response()->json(['message' => "متاسفانه در حال حاضر امکان انجام این عملیات نمی باشد", 'user' => $user], 400);
    }
}
