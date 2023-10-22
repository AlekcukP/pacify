<?php

use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StoreController;

Route::post('/store', [StoreController::class, 'create']);

Route::get('/store/{id}', []);
Route::put('/store/{id}', []);
Route::delete('/store/{id}', []);

Route::prefix('store/{store_id}')->group(function () {
    Route::get('/products', []);
    Route::post('/products', []);
    Route::put('/products', []);
    Route::delete('/products', []);

    Route::get('/products/{id}', []);
    Route::put('/products/{id}', []);
    Route::delete('/products/{id}', []);
});

Route::prefix('products/{product_id}')->group(function () {
    Route::get('/images', []);
    Route::post('/images', []);
    Route::put('/images', []);
    Route::delete('/images', []);

    Route::get('/images/{id}', []);
    Route::put('/images/{id}', []);
    Route::delete('/images/{id}', []);
});
