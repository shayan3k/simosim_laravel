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


        // $advertisment = new Advertisment();
        // $advertisment->phonenumber = $request->phonenumber;
        // $advertisment->location = $request->location;
        // $advertisment->text = $request->text;
        // $advertisment->price =  $request->price;
        // $advertisment->secondprice = $request->secondprice;
        // $advertisment->value = $request->value;
        // $advertisment->operator = $request->operator;
        // $advertisment->code = $request->code;
        // $advertisment->rond =  $request->rond;
        // $advertisment->simstatus = $request->simstatus;
        // $advertisment->sale = $request->sale;
        // $advertisment->published =  false;
        // $advertisment->created_at = NOW();
        // $advertisment->updated_at = NOW();



        // $advertisment->save();


        // phonenumber: PhoneNumber,
        //                 operator: "همراه اول",
        //                 code: Code,
        //                 value: Sale ? "" : Value,
        //                 rond: Rond,
        //                 location: Location,
        //                 simstatus: SimStatus,
        //                 text: Text.trim(),
        //                 price: Price * 1000,
        //                 sale: Sale ? "فوری" : "",
        //                 secondprice: Sale ? SecondPrice * 1000 : 0,
        //                 modifed: new Date().toISOString()



    }
}
