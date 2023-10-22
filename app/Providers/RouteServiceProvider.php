<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });

        $this->routes(function () {
            Route::middleware(['api', 'auth:sanctum'])
                ->domain('api.' . config('app.domain'))
                ->group(base_path('routes/api.php'));

            Route::middleware('api')
                ->domain('auth.' . config('app.domain'))
                ->group(base_path('routes/auth.php'));

            Route::middleware([HandlePrecognitiveRequests::class])
                ->domain('forms.' . config('app.domain'))
                ->group(base_path('routes/forms.php'));

            Route::view('/{path?}', 'index')
                ->where('path', '.*')
                ->name('react');
        });
    }
}
