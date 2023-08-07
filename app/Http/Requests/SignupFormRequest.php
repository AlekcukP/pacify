<?php

namespace App\Http\Requests;

class SignupFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
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
            'email.unique' => 'This email is already registered.',
            'email.max' => 'Email length exceeds the maximum limit.',
            'first_name.max' => 'First name length exceeds the maximum limit.',
            'last_name.max' => 'Last name length exceeds the maximum limit.',
            'required' => 'Field is required.',
            'password.min' => 'Password must be at least 8 characters long.',
            'confirm_password.same' => 'Confirm password must match the password.',
        ];
    }

    /**
    * Get the view validation rules.
    *
    * @return array
    */
    public function view_rules()
    {
        return [
            'email' => 'required|email|max:255',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'password' => 'required|min:8',
            'confirm_password' => 'required|same:password',
        ];
    }
}
