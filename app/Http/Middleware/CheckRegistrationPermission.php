<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User\Invitation;

class CheckRegistrationPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->query('rid') || !Invitation::find($request->query('rid'))) {
            return response()->json([
                'status' => false,
                'message' => "Permission denied. Invalid invite token."
            ], 403);
        }

        return $next($request);
    }
}
