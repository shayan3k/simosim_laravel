<?php

namespace App\Http\Controllers;

use App\Advertiser;
use Illuminate\Http\Request;

class AdvertiserController extends Controller
{
    /**
     * Show Advertisments.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function show()
    {
        $data = [];
        $advertiser = Advertiser::take(10)->get();
        foreach ($advertiser as $item) {

            $new = [
                'advertisername' => $item->name,
                'shopname' => $item->shopname,
                'phonenumbers' => unserialize($item->phonenumbers),
                'contactnumber' => unserialize($item->contactnumbers),
            ];

            array_push($data, $new);
        }

        return response()->json($data, 200);
    }

    /**
     * Show VIP Advertisments.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function vipshow()
    {


        $data = [
            'title' => 'بهترین سیمکارتهای همراه اول',
            'advertisername' => 'دکتر عباسی',
            'text' => 'همه نابغه‌اند اما اگر شما نبوغ یک ماهی را با توانایی‌اش ست که یک کودن تمام‌عیار است',
            'shopname' => 'سارینا',
            'phonenumbers' => ['09121111111', '09122222222', '09123333333', '09124444444', '09125555555', '09126666666', '09127777777'],
            'contactnumber' => ['09129090909', '09127170125'],
        ];



        return response()->json($data, 200);
    }
}
