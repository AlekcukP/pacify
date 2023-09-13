<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('stores', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->index()->constrained()->onDelete('cascade');
            $table->string('name', 30)->index();
            $table->string('legal_name', 30)->nullable();
            $table->string('email', 320)->nullable();
            $table->text('description')->nullable();
            $table->date('founded_date')->nullable();
            $table->string('country', 60)->nullable();
            $table->string('address', 100)->nullable();
            $table->unsignedSmallInteger('apt')->nullable();
            $table->string('city', 85)->nullable();
            $table->char('post_code', 10)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('stores', function (Blueprint $table) {
            $table->dropForeign('stores_user_id_foreign');
            $table->dropIfExists();
        });
    }
};
