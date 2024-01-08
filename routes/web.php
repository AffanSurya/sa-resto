<?php

use App\Http\Controllers\PemesananController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



// Route::get('/', function () {
//     return Inertia::render('Home');
// });
// OrderPage
// Route::get('/order', [PemesananController::class, 'order']);
// Route::post('/store', [PemesananController::class, 'store']);
// Route::post('/store', [PemesananController::class, 'store']);

// Route::get('/order', [PemesananController::class, 'order']);
// // HomePage
// Route::get('/', [PemesananController::class, 'index']);
// Route::get('/{id}', [PemesananController::class, 'show']);

Route::get('/', [PemesananController::class, 'index'])->name('home');
Route::get('/order', [PemesananController::class, 'order']);
Route::post('/store', [PemesananController::class, 'store']);
Route::post('/delete', [PemesananController::class, 'destroy'])->name('delete');
Route::post('/update', [PemesananController::class, 'update']);
Route::get('/dashboard', [PemesananController::class, 'showv2']);


Route::get('/edit/{id}', [PemesananController::class, 'edit']);
Route::get('/{id}', [PemesananController::class, 'show']);


// Route::get('/welcome', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

//     Route::post('/create', [PemesananController::class, 'create']);
// });

require __DIR__ . '/auth.php';
