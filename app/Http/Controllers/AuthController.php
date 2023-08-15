<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function create(SignupRequest $request)
    {
        $user = User::create($request->safe()->all());

        $token = $user->createToken(hash('sha256', $user->email))->accessToken;

        return response([
            'success' => true,
            'token' => [
                'name' => $token->name,
                'expires_at' => $token->expires_at
            ]
        ], 200);
    }

    public function login(Request $request)
    {

    }
}
