<?php

use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->group(function () {
    Route::get('/products', function () {
        return 'products List';
    });
    Route::post('/products', function () {
        return 'Customers Create';
    });
});
