<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([AdvertiserSeeder::class, UsersSeeder::class, UserWithAdvertismentSeeder::class]);
    }
}


//UsersSeeder::class, AdvertismentSeeder::class
