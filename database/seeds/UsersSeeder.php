<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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

            $user = new User();
            $user->name = 'admin';
            $user->phonenumber = '09127170126';
            $user->phonenumber_verified_at =  null;
            $user->password  = Hash::make('admin');
            $user->remember_token = '00000';
            $user->active = true;
            $user->is_admin = true;
            $user->save();
        } else {
            echo "\e[31mTable is not empty, therefore NOT ";
        }
    }
}
