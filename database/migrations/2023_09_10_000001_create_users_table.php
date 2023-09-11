<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('password');
            $table->foreignId('group_id')->default(2);
            $table->string('first_name', 30);
            $table->string('last_name', 30);
            $table->string('email', 320)->unique()->index();
            $table->timestamp('email_verified_at')->nullable();
            $table->date('birth_date')->nullable();
            $table->enum('gender', ['male', 'female'])->nullable();
            $table->enum('account_status', ['active', 'suspended', 'deactivated'])->default('active');
            $table->rememberToken();
            $table->timestamps();

            $table->foreign('group_id')->references('id')->on('user_groups');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign('users_group_id_foreign');
            $table->dropIfExists();
        });
    }
};
