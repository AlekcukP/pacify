<?php

namespace App\Http\Requests;

use App\Http\Requests\FormRequest;

class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation custom error messages
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'email.email' => 'Please enter a valid email address.',
            'email.max' => 'Email length exceeds the maximum limit.',
            'first_name.max' => 'First name length exceeds the maximum limit.',
            'last_name.max' => 'Last name length exceeds the maximum limit.',
            'required' => 'Field is required.',
            'confirm_password.same' => 'Confirm password must match the password.',
        ];
    }

    /**
    * Get the view validation rules.
    *
    * @return array
    */
    public function rules()
    {
        return [
            'email' => ['required', 'email', 'max:255', 'unique:App\Models\User,email'],
            'first_name' => ['required', 'string', 'max:255', 'min:3'],
            'last_name' => ['required', 'string', 'max:255', 'min:3'],
            'password' => ['required', 'password'],
            'confirm_password' => ['required', 'same:password'],
        ];
    }
}
