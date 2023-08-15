<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::view('/{path?}', 'index')
    ->where('path', '.*')
    ->name('react');

// Route::get('/login', [AuthController::class, 'login']);
// Route::post('/lookup', [AuthController::class, 'login']);
// Route::put('/signup/create', [AuthController::class, 'create']);

// Route::middleware('auth:api')->group(function () {
//     Route::get('/', function () {
//         return 'Hi';
//     });
//     Route::post('/', function () {
//         return 'Post';
//     });
//     Route::get('/customers', function () {
//         return 'Customers Hi';
//     });
//     Route::post('/customers', function () {
//         return 'Customers Post';
//     });
// });

