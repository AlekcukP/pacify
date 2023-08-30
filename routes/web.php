<?php

use Illuminate\Http\Client\Request;
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

Route::any('/unauthenticated', function () {
    return response()->json([
        'status' => false,
        'message' => 'Unauthenticated.',
    ], 401);
})->name('unauthenticated');

Route::view('/{path?}', 'index')
    ->where('path', '.*')
    ->name('react');

