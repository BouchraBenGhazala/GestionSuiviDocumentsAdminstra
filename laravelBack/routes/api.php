<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Spatie\FlareClient\Api;
use App\Http\Controllers\DocumentController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/data', [ApiController::class, 'getData']);
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => 'api'], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});

Route::post('/documents', [DocumentController::class, 'store']);
Route::get('/list', [DocumentController::class, 'getDocuments']);

    

Route::get('/getDemandes', [ApiController::class, 'getDemandes']);

// Route::get('/get')

Route::get('/getFiltredDemandes/{state}', [ApiController::class, 'getFiltresDemandes'])->where('state', '^(approved|pending)$');

Route::get('/getEtudiant', [ApiController::class, 'getEtudiant']);