<?php

namespace App\Http\Requests;

// use Elegant\Sanitizer\Laravel\SanitizesInput;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Models\User;
use App\Exceptions\PermissionException;
use App\Models\Invitation;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
{
    public $invitation;

    /**
     * Determine if the user is authorized to make this request.
     *
     * * @return void
     */
    public function authorize(): bool
    {
        if (!$this->query('iid')) {
            return $this->failedRegistration("Registration token is required.");
        }

        if (!$this->invitation = Invitation::find($this->query('iid'))) {
            return $this->failedRegistration("Invalid registration token.");
        }

        if ($this->invitation->isUsed()) {
            return $this->failedRegistration("Registration token has already been used.");
        }

        if ($this->invitation->isExpired()) {
            return $this->failedRegistration("Registration token is expired.");
        }

        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'min:3', 'max:30'],
            'last_name' => ['required', 'string', 'min:3', 'max:30'],
            'email' => [
                'required',
                'string',
                'email',
                'max:320',
                !$this->isPrecognitive() ? Rule::unique(User::class) : null,
            ],
            'password' => [
                'required',
                'string',
                'confirmed',
                Password::min(8)->numbers()
            ],
            'password_confirmation' => ['same:password'],
        ];
    }

    /**
     * Handle a failed registration attempt.
     *
     * @return void
     *
     * @throws \App\Exceptions\PermissionException
     */
    protected function failedRegistration(string $message)
    {
        throw new PermissionException($message);
    }
}
