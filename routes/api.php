<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
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

Route::group(['middleware' => 'api'], function(){
  Route::get('blogs', 'App\Http\Controllers\Api\BlogController@index');
  Route::post('blogs/create', 'App\Http\Controllers\Api\BlogController@create'); 
  Route::post('edit', 'App\Http\Controllers\Api\BlogController@edit');
  Route::post('update', 'App\Http\Controllers\Api\BlogController@update');
  Route::post('delete', 'App\Http\Controllers\Api\BlogController@delete');
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function() {
  Route::post('logout', [AuthController::class, 'logout']);
});