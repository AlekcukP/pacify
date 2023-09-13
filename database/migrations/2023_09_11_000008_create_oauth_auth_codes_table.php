<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;
use App\Models\Store;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('oauth_auth_codes', function (Blueprint $table) {
            $table->string('id', 100)->primary();
            $table->foreignIdFor(User::class)->nullable()->constrained()->onDelete('cascade');
            $table->foreignIdFor(Store::class)->nullable()->constrained()->onDelete('cascade');
            $table->foreignUuid('client_id')->constrained('oauth_clients')->onDelete('cascade');
            $table->text('scopes')->nullable();
            $table->boolean('revoked')->default(0);
            $table->dateTime('expires_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('oauth_auth_codes', function (Blueprint $table) {
            $table->dropForeign('oauth_auth_codes_user_id_foreign');
            $table->dropForeign('oauth_auth_codes_store_id_foreign');
            $table->dropForeign('oauth_auth_codes_client_id_foreign');
            $table->dropIfExists();
        });
    }
};
