<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Arr;
class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->safe()->all();

        $user = User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        response()->json([
            'status' => true,
            'message' => 'User created successfully.',
            'user' => $user
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->safe()->all();

        if (Auth::attempt($credentials)) {
            $tokenName = $request->user()->getTokenName();
            $token = $request->user()->createToken($tokenName);

            return response()->json([
                'status' => true,
                'message' => 'User logged in successfully.',
                'user' => $request->user(),
                'token' => $token->plainTextToken
            ]);
        }

        return response()->json([
            'status' => false,
            'message' => 'The provided credentials are incorrect.',
        ], 400);
    }

    public function user(Request $request)
    {
        if (Auth::check()) {
            return response()->json([
                'status' => true,
                'message' => 'User logged in successfully.',
                'user' => Auth::user()
            ]);
        }

        return redirect('unauthenticated');
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        $request->session()->regenerateToken();

        return response()->json([
            'status' => true,
            'message' => 'Logged out.'
        ]);
    }
}
