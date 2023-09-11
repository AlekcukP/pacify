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
        Schema::create('user_invitations', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->timestamp('used_at')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('expired_at')->default(now()->addDay(3));

            $table->index(['id', 'expired_at', 'used_at']);
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user_invitations', function (Blueprint $table) {
            $table->dropForeign('user_invitations_user_id_foreign');
            $table->dropIfExists();
        });
    }
};
