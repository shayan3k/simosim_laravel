<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/clear', function () {
    Artisan::call('config:clear');
    return "All cache cleared";
});

Route::get('/cache', function () {
    Artisan::call('config:cache');
    return "All cache cleared";
});



Route::get('/{path?}', [
    'uses' => 'ReactController@show',
    'as' => 'react',
    'where' => ['path' => '.*']
])->name('app');
