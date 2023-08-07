<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest as BaseFormRequest;
use Elegant\Sanitizer\Laravel\SanitizesInput;
use App\Http\Requests\Interfaces\FormRequestInterface;

abstract class FormRequest extends BaseFormRequest implements FormRequestInterface
{
    use SanitizesInput;
}