<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\User\Invitation;
use Illuminate\Support\Facades\Auth;
use App\Enums\UserGroups;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->safe()->all();
        $group = UserGroups::MERCHANT;

        $user = User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'password' => $data['password'],
            'group_id' => $group->id()
        ]);

        Invitation::find($request->query('rid'))->update([
            'user_id' => $user->id,
            'used_at' => now()
        ]);

        $token = $user->createToken("{$group->name}_{$user->id}_token");

        dd($token);

        return response()->json([
            'status' => true,
            'message' => 'User created successfully.',
            'user' => $user,
            'token' => $token->accessToken
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
                'token' => $token->accessToken
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
