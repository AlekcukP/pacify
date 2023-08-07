<?php

namespace App\Modules;

use Illuminate\Support\Facades\Validator;
use App\Modules\Helpers\RuleExtractor;

abstract class ModuleConfiguration {
    protected $configuration;
    public $public = [];
    public $internal = [];

    public function __construct($cofiguration)
    {
        $this->setConfiguration($cofiguration);
    }

    protected function setConfiguration($cofiguration)
    {
        $this->configuration = $cofiguration;

        list($public, $internal) = RuleExtractor::extract($cofiguration);

        $this->public = $public;
        $this->internal = $internal;
    }

    // public function isValid(array $instance, $cofiguration)
    // {
    //     $validator = Validator::make($instance, $cofiguration);

    //     if ($validator->fails()) {
    //         return false;
    //     }

    //     return true;
    // }
}
