<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Laravel\Passport\Client;
use Illuminate\Support\Facades\Auth;
use App\Enums\UserGroups;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'first_name' => $request->validated('first_name'),
            'last_name' => $request->validated('last_name'),
            'email' => $request->validated('email'),
            'password' => $request->validated('password'),
            'group_id' => UserGroups::MERCHANT->id()
        ]);

        $client = Client::find($request->query('rid'));
        $client->user_id = $user->id;
        $client->save();

        return response()->json([
            'status' => true,
            'message' => 'User created successfully.',
            'user' => [
                'email' => '',
                'first_name' => '',
                'last_name' => '',
            ],
            'token' => $user->createToken($client->id)->accessToken
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

    public function createClient()
    {
        $client = Client::newFactory()->createOne();

        return response()->json([
            'rid' => $client->id,
            'link' => route('register', ['rid' => $client->id])
        ]);
    }
}
