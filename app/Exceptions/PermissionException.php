<?php

namespace App\Exceptions;

use Exception;

class PermissionException extends Exception
{
    /**
     * Create a new permission exception instance.
     *
     * @param  string|null  $message
     * @param  mixed  $code
     */
    public function __construct($message = null, $code = null)
    {
        parent::__construct($message ?? 'Permission denied.', 403);
    }

    public function render()
    {
        return response()->json([
            'message' => $this->message
        ], $this->code);
    }
}
