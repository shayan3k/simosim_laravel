<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('register', 'RegisterUserController@register');
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});


Route::get('/advertisments', 'AdvertismentController@showAll');
Route::get('/advertisments-sale', 'AdvertismentController@showSale');
Route::get('/advertisments-gold', 'AdvertismentController@showGold');
Route::get('/advertisments-silver', 'AdvertismentController@showSilver');
Route::get('/advertisments-bronze', 'AdvertismentController@showBronze');
Route::get('/advertisments-me', 'AdvertismentController@showMe')->middleware('auth:api');
Route::post('/advertisments', 'AdvertismentController@create')->middleware('auth:api');


Route::get('/advertisers', 'AdvertiserController@show');
Route::get('/vipadvertisers', 'AdvertiserController@vipshow');

Route::get('/navbar', function () {

    return [
        ['post_title' => 'تبلیغات/تماس با ما', 'url' => '/contact-us'],
        ['post_title' => 'قوانین', 'url' => '/ghavanin'],
        ['post_title' => 'راهنما', 'url' => '/rahnama'],
        ['post_title' => 'داشبورد', 'url' => '/dashboard'],
        ['post_title' => 'خانه', 'url' => '/'],
    ];
});
