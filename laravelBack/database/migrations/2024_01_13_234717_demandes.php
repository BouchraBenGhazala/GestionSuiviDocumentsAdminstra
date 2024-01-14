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
        Schema::create('demandes', function (Blueprint $table) {
            $table->id(); // Auto-incremental primary key
            $table->string('etat');
            $table->string('raison');

            $table->unsignedInteger('admin_id');
            $table->unsignedInteger('etudiant_id');
            $table->unsignedInteger('type_demande_id');

            $table->softDeletes();
            $table->timestamps(); // Created at and Updated at timestamps

            $table->foreign('admin_id')->references('id')->on('admin')->onDelete('cascade');
            $table->foreign('etudiant_id')->references('id')->on('etudiants')->onDelete('cascade');
            $table->foreign('type_demande_id')->references('id')->on('type_demandes')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('demandes');
    }
};
