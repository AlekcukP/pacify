<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Contracts\Console\Isolatable;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class MakeUser extends Command implements Isolatable
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:user
                            {username : Email or any unique name for the user record}
                            {password : Password for the user record}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Creates user record in the DB';

    /**
 * Prompt for missing input arguments using the returned questions.
 *
 * @return array
 */
protected function promptForMissingArgumentsUsing()
{
    return [
        'username' => 'Username parameter is required',
        'password' => 'Password parameter is required',
    ];
}

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $password = $this->argument('password');
        $username = $this->argument('username');

        $validator = Validator::make(
            ['email' => $username],
            ['email' => [Rule::unique(User::class), 'email']]
        );

        if ($validator->fails()) {
            return $this->error($validator->errors()->toJson());
        }


        $user = User::create([
            'first_name' => 'Admin',
            'last_name' => 'Admin',
            'email' => $username,
            'password' => $password
        ]);

        $this->info('User created successfully');
        $this->info(json_encode([
            'username' => $user->email,
            'password' => $password
        ]));
    }
}
