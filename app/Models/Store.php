<?php

namespace App\Models;

use App\Events\StoreCreated;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use Notifiable;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'stores';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'name',
        'legal_name',
        'email',
        'description',
        'country',
        'address',
        'apt',
        'city',
        'post_code'
    ];

    /**
     * The event map for the model.
     *
     * @var array
     */
    protected $dispatchesEvents = [
        'created' => StoreCreated::class,
    ];

        /**
     * Get the user that owns the stores.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
