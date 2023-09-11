<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use \Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\User;

class Store extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

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
     * Get the user that owns the stores.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
