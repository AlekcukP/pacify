<?php

namespace App\Enums;

enum UserGroups: string {
    case ADMIN = 'admin';
    case MERCHANT = 'merchant';

    public function id(): int
    {
        return static::getId($this);
    }

    public static function values(): array
    {
        return collect(self::cases())->map(function ($group) {
            return $group->value;
        })->toArray();
    }

    protected static function getId(self $value): int
    {
        return match ($value) {
            self::ADMIN => 1,
            self::MERCHANT => 2,
            default => 0,
        };
    }
}
