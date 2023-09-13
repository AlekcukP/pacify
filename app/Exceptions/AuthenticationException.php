<?php

namespace App\Exceptions;

use Exception;

class AuthenticationException extends Exception
{
    /**
     * Create a new permission authentication instance.
     *
     * @param  string|null  $message
     * @param  mixed  $code
     */
    public function __construct($message = null, $code = null)
    {
        parent::__construct($message ?? 'Unauthenticated.', 401);
    }

    public function render()
    {
        return response()->json([
            'message' => $this->message
        ], $this->code);
    }
}
