<?php

use Illuminate\Database\Seeder;

class AdvertiserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $advertisers = factory(App\Advertiser::class, 10)
            ->create();
    }
}
