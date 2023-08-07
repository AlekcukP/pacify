<?php

namespace App\Http\Requests\Interfaces;

interface FormRequestInterface
{
    /**
     * Get the validation custom error messages
     *
     * @return array
     */
    public function view_rules();

}