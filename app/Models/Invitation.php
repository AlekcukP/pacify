<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Invitation extends Model
{
    use HasFactory, HasUuids;

    /**
     *
     * @var int
     */
    protected static $expireDays = 3;

    /**
     * The "type" of the primary key ID.
     *
     * @var string
     */
    protected $keyType = 'string';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['user_id', 'expires_at'];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'expires_at' => 'datetime',
        'user_id' => 'int',
    ];

    public static function new()
    {
        return  self::create(['expires_at' => now()->addDays(self::$expireDays)]);
    }

    public function isExpired()
    {
        return $this->expires_at->isPast();
    }

    public function isUsed()
    {
        return !is_null($this->user_id);
    }

    /**
     * Get the invitation link.
     */
    protected function link(): Attribute
    {
        return Attribute::make(
            get: fn (mixed $value, array $attributes) => (
                route('register', ['iid' => $attributes['id']])
            )
        );
    }
}
