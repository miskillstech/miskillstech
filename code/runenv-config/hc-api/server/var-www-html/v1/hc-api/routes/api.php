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
Route::get('testApi', function () {
    echo 'Laravel is working';
});
Route::get('cabLogin', 'Login@fnCabLogin');
Route::put('cabRegistration', 'Registration@fnCabRegistration');
Route::get('getOTPForPhoneVerification/{id}', 'Registration@fnGetOTPForPhoneVerification');
Route::put('verifyOTPForPhone', 'Registration@fnVerifyOTPForPhone');