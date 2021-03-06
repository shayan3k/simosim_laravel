<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Advertiser;
use Faker\Generator as Faker;

$factory->define(Advertiser::class, function (Faker $faker) {
    $data = [];
    for ($i = 0; $i < 6; $i++) {
        array_push($data, ("0912" . $faker->randomNumber(7)));
    }


    $data2 = [];
    for ($i = 0; $i < 2; $i++) {
        array_push($data2, ("0912" . $faker->randomNumber(7)));
    }


    return [

        'name' => $faker->firstName(),
        'shopname' => $faker->monthName(),
        'phonenumbers' =>  json_encode($data),
        'contactnumbers' => json_encode($data2),
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
    ];
});
