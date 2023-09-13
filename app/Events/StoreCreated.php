<?php

namespace App\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\Store;

class StoreCreated
{
    use Dispatchable, SerializesModels;

    public $store;

    /**
     * Create a new event instance.
     */
    public function __construct(Store $store)
    {
        $this->store = $store;
    }

}
