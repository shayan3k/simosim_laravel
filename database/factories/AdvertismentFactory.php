<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Advertisment;
use Faker\Generator as Faker;

$factory->define(Advertisment::class, function (Faker $faker) {
    return [
        "phonenumber" => ("0912" . $faker->randomNumber(7)),
        "location" => "آذربایجان غربی",
        "text" => "bfdbdfb",
        "price" => "1200000",
        "secondprice" => "0",
        "operator" => "همراه اول",
        "code" => "8",
        "value" => "برنز",
        "rond" => "رند",
        "simstatus" => "صفر",
        "sale" => "",
        'published' => false,
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
    ];
});
