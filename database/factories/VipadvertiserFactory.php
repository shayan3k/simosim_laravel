<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Vipadvertiser;
use Faker\Generator as Faker;

$factory->define(Vipadvertiser::class, function (Faker $faker) {
    return [

        'title' => 'بهترین سیمکارتهای همراه اول',
        'advertisername' => 'دکتر عباسی',
        'text' => 'همه نابغه‌اند اما اگر شما نبوغ یک ماهی را با توانایی‌اش ست که یک کودن تمام‌عیار است',
        'shopname' => 'سارینا',
        'phonenumbers' => json_encode(['09121111111', '09122222222', '09123333333', '09124444444', '09125555555', '09126666666', '09127777777']),
        'contactnumber' => json_encode(['09129090909', '09127170125']),
        'created_at' => NOW(),
        'updated_at' => NOW(),
    ];
});
