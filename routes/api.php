<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;

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

Route::post('/login', [AuthController::class, 'login'])->middleware([HandlePrecognitiveRequests::class]);
Route::get('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register'])->middleware([HandlePrecognitiveRequests::class]);

Route::middleware('auth:sanctum')->group(function () {
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
