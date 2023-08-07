<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignupFormRequest;
use App\Http\Controllers\FormController;


class SignupFormController extends FormController
{
    public function create()
    {
        // $request->validated();

        // $request->validated();

        // if (!$request->validated()) {
        //     return response('', 422)->withErrors()
        //             ->withInput();
        // }

        // $formData = $request->safe()->all();

        // return response()->json([
        //     'formData' => $formData,
        //     'rules' => $request->view_rules()
        // ]);
    }
}
