<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;

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

Route::post('/login', [AuthController::class, 'login'])->middleware([HandlePrecognitiveRequests::class]);
Route::post('/register', [AuthController::class, 'register'])->middleware([HandlePrecognitiveRequests::class]);

Route::any('/unauthenticated', function () {
    return response()->json([
        'status' => false,
        'message' => 'Unauthenticated.',
    ], 401);
})->name('unauthenticated');

Route::view('/{path?}', 'index')
    ->where('path', '.*')
    ->name('react');

