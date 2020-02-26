<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {

        if (DB::table('users')->get()->count() == 0) {

            DB::table('users')->insert([

                [
                    'name' => 'Administrator',
                    'email' => 'admin@app.com',
                    'password' => bcrypt('password'),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ],
                [
                    'name' => 'Agency',
                    'email' => 'agency@app.com',
                    'password' => bcrypt('password'),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ],
                [
                    'name' => 'End',
                    'email' => 'endcustomer@app.com',
                    'password' => bcrypt('password'),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ]

            ]);
        } else {
            echo "\e[31mTable is not empty, therefore NOT ";
        }
    }
}
