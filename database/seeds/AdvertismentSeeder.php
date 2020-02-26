<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdvertismentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('advertisments')->insert([

            [
                "phonenumber" => "09128555555",
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
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],


            [
                "phonenumber" => "09127477474",
                "location" => "بوشهر",
                "text" => "sdsd",
                "price" => "215454000",
                "secondprice" => "0",
                "operator" => "همراه اول",
                "code" => "7",
                "value" => "طلایی",
                "rond" => "رند",
                "simstatus" => "تقریبا صفر",
                "sale" => "",
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],



            [
                "phonenumber" => "09124345666",
                "location" => "آذربایجان غربی",
                "text" => "",
                "price" => "1250000",
                "secondprice" => "0",
                "operator" => "همراه اول",
                "code" => "1",
                "value" => "برنز",
                "rond" => "نیمه رند",
                "simstatus" => "صفر",
                "sale" => "",
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],


            [
                "phonenumber" => "09121813466",
                "location" => "اصفهان",
                "text" => "sadadada",
                "price" => "1200000",
                "secondprice" => "0",
                "operator" => "همراه اول",
                "code" => "1",
                "value" => "برنز",
                "rond" => "نیمه رند",
                "simstatus" => "تقریبا صفر",
                "sale" => "",
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],



            [
                "phonenumber" => "09126456565",
                "location" => "خوزستان",
                "text" => "kjbk k kh kh kh kh kh kh",
                "price" => "3500000",
                "secondprice" => "3400000",
                "operator" => "همراه اول",
                "code" => "6",
                "value" => "برنز",
                "rond" => "نیمه رند",
                "simstatus" => "صفر",
                "sale" => "فوری",
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],



            [
                "phonenumber" => "09128557755",
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
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],




            [
                "phonenumber" => "09128587615",
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
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],




            [
                "phonenumber" => "09124678996",
                "location" => "خوزستان",
                "text" => "kjbk k kh kh kh kh kh kh",
                "price" => "45000000",
                "secondprice" => "0",
                "operator" => "همراه اول",
                "code" => "4",
                "value" => "نقره ای",
                "rond" => "نیمه رند",
                "simstatus" => "صفر",
                "sale" => "",
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],




        ]);
    }
}
