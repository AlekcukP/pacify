<?php

namespace App\Rules;

use Illuminate\Validation\Validator;

class Password
{
    protected $validator;

    public static function handle(): string
    {
        return 'password';
    }

    public function passes($attribute, $value)
    {
        if (! is_string($value)) {
            $this->validator->errors()->add(
                $attribute,
                $this->getErrorMessage('validation.password.string')
            );
        }

        if (! preg_match('/\pL/u', $value)) {
            $this->validator->errors()->add(
                $attribute,
                $this->getErrorMessage('validation.password.letters')
            );
        }

        // if (! preg_match('/\p{Z}|\p{S}|\p{P}/u', $value)) {
        //     $this->validator->errors()->add(
        //         $attribute,
        //         $this->getErrorMessage('validation.password.symbols')
        //     );
        // }

        if (! preg_match('/\pN/u', $value)) {
            $this->validator->errors()->add(
                $attribute,
                $this->getErrorMessage('validation.password.numbers')
            );
        }

        return empty($this->validator->errors()->first($attribute));
    }

    protected function getErrorMessage($key)
    {
        $messages = [
            'validation.password.string' => 'Password is invalid.',
            'validation.password.letters' => 'Password must contain at least one letter.',
            'validation.password.symbols' => 'Password must contain at least one symbol.',
            'validation.password.numbers' => 'Password must contain at least one number.',
        ];

        return $messages[$key];
    }

    public function setValidator(Validator $validator)
    {
        $this->validator = $validator;

        return $this;
    }

    public function validate(string $attribute, $value, $params, Validator $validator): bool
    {
        return $this->setValidator($validator)->passes($attribute, $value);
    }
}
