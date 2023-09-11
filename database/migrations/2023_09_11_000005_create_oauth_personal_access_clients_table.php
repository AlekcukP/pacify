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
        Schema::create('oauth_personal_access_clients', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignUuid('client_id');
            $table->timestamps();

            $table->foreign('client_id')->references('id')->on('oauth_clients');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('oauth_personal_access_clients', function (Blueprint $table) {
            $table->dropForeign('oauth_personal_access_clients_client_id_foreign');
            $table->dropIfExists();
        });
    }
};
