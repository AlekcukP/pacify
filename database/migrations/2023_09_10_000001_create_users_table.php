<?php

use App\Models\User\Group;
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
            $table->foreignIdFor(Group::class)->default(2)->constrained('user_groups')->onDelete('cascade');
            $table->string('first_name', 30);
            $table->string('last_name', 30);
            $table->string('email', 320)->unique()->index();
            $table->timestamp('email_verified_at')->nullable();
            $table->enum('account_status', ['active', 'suspended', 'deactivated'])->default('active');
            $table->rememberToken();
            $table->timestamps();
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
