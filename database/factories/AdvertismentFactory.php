<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Advertisment;
use Faker\Generator as Faker;

$factory->define(Advertisment::class, function (Faker $faker) {
    $number = $faker->randomNumber(7);
    return [
        "phonenumber" => ("0912" . $faker->randomNumber(7)),
        "location" => "آذربایجان غربی",
        "text" => "تکس مورد نظ",
        "price" => "1200000",
        "secondprice" => "1100000",
        "operator" => "همراه اول",
        "code" => $faker->randomNumber(1),
        "value" => $faker->randomElement(['برنز', 'طلایی', 'نقره ای']),
        "rond" => $faker->randomElement(['رند', 'نیمه رند', 'معمولی']),
        "simstatus" => $faker->randomElement(['صفر', 'تقریبا صفر', 'کارکرده']),
        "sale" => "",
        'published' => true,
        'sold' => false,
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
    ];
});
