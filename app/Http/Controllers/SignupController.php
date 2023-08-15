<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignupRequest;


class SignupController extends Controller
{
    public function create(SignupRequest $request)
    {

        $data = $request->safe()->all();

        return response()->json([
            'formData' => $data,
            'rules' => $request->rules()
        ]);
    }
}
