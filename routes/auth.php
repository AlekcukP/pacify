<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post('/register', [AuthController::class, 'register'])
    ->middleware('register.allowed')
    ->name('register');

Route::post('/login', [AuthController::class, 'login'])
    ->name('login');

Route::post('/invite', [AuthController::class, 'invite'])
    ->middleware(['auth', 'admin'])
    ->name('invite');
