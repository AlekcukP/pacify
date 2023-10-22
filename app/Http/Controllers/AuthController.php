<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use App\Models\Invitation;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'first_name' => $request->validated('first_name'),
            'last_name' => $request->validated('last_name'),
            'email' => $request->validated('email'),
            'password' => $request->validated('password')
        ]);

        $request->invitation->used($user);

        return [
            'user' => [
                'email' => $user->email,
                'full_name' => $user->full_name,
                'avatar' => $user->details->avatar
            ],
            'token' => $user->createToken('Admin Token', ['store:create'])->plainTextToken
        ];
    }

    public function login(LoginRequest $request)
    {
        if (auth()->attempt($request->safe(['email', 'password']))) {
            $user = auth()->user();

            return [
                'user' => [
                    'email' => $user->email,
                    'full_name' => $user->full_name,
                    'avatar' => $user->details->avatar
                ],
                'token' => $user->createToken('Admin Token', ['store:create'])->plainTextToken
            ];
        }

        return response()->json([
            'password' => 'Password is incorrect.'
        ], 400);
    }

    protected function invite()
    {
        return Invitation::new();
    }
}
