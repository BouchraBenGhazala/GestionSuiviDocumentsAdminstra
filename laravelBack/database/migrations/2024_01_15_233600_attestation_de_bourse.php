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
        Schema::create('attestation_de_bourse', function (Blueprint $table) {
            $table->id(); // Auto-incremental primary key
            $table->date('annee');
            $table->string('lieu_de_naissance');
            $table->string('type_bourse');

            $table->unsignedBigInteger('demande_id')->nullable();

            $table->softDeletes();
            $table->timestamps(); // Created at and Updated at timestamps
            $table->foreign('demande_id')->references('id')->on('demandes');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attestation_de_bourse');
    }
};
