<?php

namespace App\Jobs;

use App\Models\User\Invitation;

class EraseExpiredInvitations
{
    function __construct()
    {
        $this->eraseInvitations();
    }

    protected function eraseInvitations()
    {
        return Invitation::where('expired_at', '<=', now())->delete();
    }
}
