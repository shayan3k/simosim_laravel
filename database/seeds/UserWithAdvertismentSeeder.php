<?php

use App\Advertisment;
use Illuminate\Database\Seeder;

class UserWithAdvertismentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = factory(App\User::class, 10)
            ->create()
            ->each(function ($user) {
                $user->advertisments()->save(factory(Advertisment::class)->make());
            });
    }
}
