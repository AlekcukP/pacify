<?php

namespace App\Observers;

use App\Models\Store;

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
        //
    }
}
