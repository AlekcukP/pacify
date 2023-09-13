<?php

namespace App\Observers;

use App\Models\Store;
use Laravel\Passport\Passport;

class StoreObserver
{
    /**
     * Handle events after all transactions are committed.
     *
     * @var bool
     */
    public $afterCommit = true;

    /**
     * Handle the Store "created" event.
     */
    public function created(Store $store): void
    {
        $client = Passport::client()->create([
            'name' => $store->name,
            'redirect' => config('app.url'),
            'user_id' => $store->user->id,
            'store_id' => $store->id,
            'personal_access_client' => 0,
            'password_client' => 0,
            'revoked' => 0,
        ]);

        $code = Passport::authCode()->create([
            'client_id' => $client->id,
            'user_id' => $store->user->id,
            'store_id' => $store->id,
            'revoked' => 0
        ]);
    }
}
