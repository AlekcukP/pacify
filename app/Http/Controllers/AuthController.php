<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Enums\UserGroups;
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
            'password' => $request->validated('password'),
            'group_id' => UserGroups::MERCHANT->id()
        ]);

        Invitation::find($request->query('iid'))->update(['user_id' => $user->id]);

        return $this->response([
            'user' => [
                'email' => $user->email,
                'full_name' => $user->full_name,
                'avatar' => $user->details->avatar,
                'group' => $user->group->name
            ],
            'token' => auth()->login($user)
        ]);
    }

    public function login(LoginRequest $request)
    {
        if ($token = auth()->attempt($request->safe(['email', 'password']))) {
            $user = auth()->user();

            return $this->response([
                'status' => true,
                'message' => 'User logged in successfully.',
                'user' => [
                    'email' => $user->email,
                    'full_name' => $user->full_name,
                    'avatar' => $user->details->avatar,
                    'group' => $user->group->name
                ],
                'token' => $token
            ]);
        }

        return $this->error('Incorrect password.', 400, [
            'password' => 'Password is incorrect.'
        ]);
    }

    protected function invite()
    {
        $invitation = Invitation::new();

        return $this->response([
            'iid' => $invitation->id,
            'expires_at' => $invitation->expires_at,
            'link' => $invitation->link
        ]);
    }
}
