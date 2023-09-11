<?php

use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/register', [AuthController::class, 'register'])
    ->middleware('register.allowed')
    ->name('register');

Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:api')->group(function () {
    Route::post('/invitation', [UserController::class, 'create_invitation']);

    Route::get('/', function () {
        return 'Hi';
    });
    Route::post('/', function () {
        return 'Post';
    });
    Route::get('/customers', function () {
        return 'Customers Hi';
    });
    Route::post('/customers', function () {
        return 'Customers Post';
    });
});
