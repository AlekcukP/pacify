<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\StoreController;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;

Route::prefix('store')->middleware('jwt.auth')->group(function () {
    Route::post('/create', [StoreController::class, 'create']);
});

Route::post('/login', [AuthController::class, 'login'])->middleware([HandlePrecognitiveRequests::class]);
Route::post('/register', [AuthController::class, 'register'])->middleware([HandlePrecognitiveRequests::class]);

Route::view('/{path?}', 'index')
    ->where('path', '.*')
    ->name('react');

