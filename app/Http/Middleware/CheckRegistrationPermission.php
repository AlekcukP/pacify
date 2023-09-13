<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Invitation;
use App\Exceptions\PermissionException;

class CheckRegistrationPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->query('iid') || !$iid = Invitation::find($request->query('iid'))) {
            throw new PermissionException("Invalid registration token.");
        }

        if ($iid->isUsed()) {
            throw new PermissionException("Token has already used.");
        }

        if ($iid->isExpired()) {
            throw new PermissionException("Token expired.");
        }

        return $next($request);
    }
}
