<?php

// --------------------------
// Custom Backpack Routes
// --------------------------
// This route file is loaded automatically by Backpack\Base.
// Routes you generate using Backpack\Generators will be placed here.

Route::group([
    'prefix'     => config('backpack.base.route_prefix', 'admin'),
    'middleware' => ['web', config('backpack.base.middleware_key', 'admin')],
    'namespace'  => 'App\Http\Controllers\Admin',
], function () { // custom admin routes
    Route::crud('advertisment', 'AdvertismentCrudController');
    Route::crud('advertisment', 'AdvertismentCrudController');
    Route::crud('advertiser', 'AdvertiserCrudController');
    Route::crud('advertiser', 'AdvertiserCrudController');
}); // this should be the absolute last line of this file
