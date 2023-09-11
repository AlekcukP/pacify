<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use App\Enums\UserGroups;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_groups', function (Blueprint $table) {
            $table->id();
            $table->string('name', 20);
            $table->text('description')->nullable();
            $table->text('scopes')->nullable();
        });

        DB::table('user_groups')->insert([
            ['id' => UserGroups::ADMIN->id(), 'name' => UserGroups::ADMIN->value],
            ['id' => UserGroups::MERCHANT->id(), 'name' => UserGroups::MERCHANT->value],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_groups');
    }
};
