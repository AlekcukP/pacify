<?php
namespace App\Validation;

use Illuminate\Validation\Validator as BaseValidator;

class Validator extends BaseValidator
{
    /**
     * Get the Presence Verifier implementation.
     *
     * @param  string|null  $connection
     * @return \Illuminate\Validation\PresenceVerifierInterface
     *
     * @throws \RuntimeException
     */
    public function getPresenceVerifier($connection = null)
    {
        return [];
    }
}