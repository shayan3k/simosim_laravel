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
        $this->call([UserWithAdvertismentSeeder::class, AdvertiserSeeder::class]);
    }
}


//UsersSeeder::class, AdvertismentSeeder::class
