<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest as BaseFormRequest;
use Elegant\Sanitizer\Laravel\SanitizesInput;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Arr;
// use App\Http\Requests\Interfaces\FormRequestInterface;

class FormRequest extends BaseFormRequest
{
    use SanitizesInput;

    protected function errors()
    {
        return Arr::map($this->validator->errors()->toArray(), function ($error) {
            return Arr::first($error);
        });
    }

    protected function failedValidation(Validator $validator)
    {
        $response = response([
            'success' => false,
            'message' => 'Invalid data',
            'errors' => $this->errors()
        ], 422);
        // $response = response()->json([
        //     'success' => false,
        //     'message' => 'Invalid data',
        //     'errors' => $this->errors()
        // ]);

        throw (new ValidationException($validator, $response))
            ->errorBag($this->errorBag);
    }
}
