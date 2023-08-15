<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/login', [AuthController::class, 'login']);
Route::post('/lookup', [AuthController::class, 'login']);
Route::put('/signup/create', [AuthController::class, 'create']);

Route::middleware('auth:api')->group(function () {
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
