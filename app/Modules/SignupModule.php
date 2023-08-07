<?php

namespace App\Modules;


class SignupModule {
    protected $module_cofiguration = [
        'email' => [
            'public' => ['required', 'max:255', 'string', 'email'],
            'internal' => ['unique:connection.users,email_address']
        ],
        'first_name' => ['required', 'string', 'max:255'],
        'last_name' => ['required', 'string', 'max:255'],
        'password' => ['required', 'string', 'min:8'],
        'confirm_password' => ['required', 'string', 'same:password'],
    ];

    protected $messages = [
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
