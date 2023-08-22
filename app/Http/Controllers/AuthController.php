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
        $credentialsBase64 = Arr::get($request->query(), 'data', '');
        $credentialsJson = base64_decode($credentialsBase64);
        $credentials = json_decode($credentialsJson, true);

        if ($credentials && Auth::attempt($credentials)) {
            $tokenName = $request->user()->getTokenName();
            $token = $request->user()->createToken($tokenName);
            $request->session()->regenerate();

            return response()->json([
                'status' => true,
                'message' => 'User logged in successfully.',
                'token' => $token->plainTextToken
            ]);
        }

        return response()->json([
            'status' => false,
            'message' => 'The provided credentials are incorrect.',
        ], 400);
    }

    public function logout(Request $request)
    {
        auth('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json([
            'status' => true,
            'message' => 'logged out'
        ]);
    }
}
