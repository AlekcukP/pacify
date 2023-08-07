<?php

namespace App\Modules;

use App\Modules\ModuleConfiguration;

class Module {
    public $cofiguration = [];
    protected $bridge;

    public function constructor(array|null $instance)
    {
        $this->cofiguration = new ModuleConfiguration(self::$cofiguration);
        $this->bridge = new ModuleBridge($instance);
    }

    static function create(array|null $instance)
    {
        if (!$instance) {
            return new Module;
        }

        return new Module($instance);
    }

    /**
     * Store a newly created module instance in storage.
     */
    public function store()
    {
        //
    }

    /**
     * Update the specified module instance in storage.
     */
    public function update()
    {
        //
    }

    /**
     * Update the specified module instance in storage.
     */
    public function all()
    {
        //
    }

    /**
     * Remove the specified module instance from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}