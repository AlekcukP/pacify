<?php

namespace App\Modules\Helpers;

class RuleExtractor {
    public const TYPE_PUBLIC = 'public';
    public const TYPE_INTERNAL = 'internal';

    public static function extract(
        array $configuration
    ): array {
        $rules = [
            self::TYPE_PUBLIC => [],
            self::TYPE_INTERNAL => []
        ];

        foreach ($configuration as $field => $rules) {
            if (!isset($publicRules[$field])) {
                $rules[self::TYPE_PUBLIC][$field] = [];
            }
            if (!isset($publicRules[$field])) {
                $rules[self::TYPE_INTERNAL][$field] = [];
            }

            if (!array_is_list($rules)) {
                if (isset($rules[self::TYPE_PUBLIC])) {
                    foreach ($rules[self::TYPE_PUBLIC] as $rule) {
                        array_push($rules[self::TYPE_PUBLIC][$field], $rule);
                        array_push($rules[self::TYPE_INTERNAL][$field], $rule);
                    }
                }

                if (isset($rules[self::TYPE_INTERNAL])) {
                    foreach ($rules[self::TYPE_INTERNAL] as $rule) {
                        array_push($rules[self::TYPE_INTERNAL][$field], $rule);
                    }
                }
            }

            foreach ($rules as $rule) {
                array_push($rules[self::TYPE_PUBLIC][$field], $rule);
            }
        }

        return $rules;
    }
}