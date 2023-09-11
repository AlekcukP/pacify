<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User\Invitation;

class UserController extends Controller
{
    public function create_invitation()
    {
        $invitation = Invitation::create();

        return response()->json([
            'token' => $invitation->id,
            'link' => route('register', ['rid' => $invitation->id])
        ]);
    }
}
