<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DemandesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('demandes')->insert([
            [
                'etat' => 'Pending',
                'type_demande' => 'Type A',
                'description' => 'Sample Description A',
                'niveau' => 'Niveau 1',
                'filliere' => 'Filliere A',
                'annee' => '2022-01-01',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'etat' => 'Approved',
                'type_demande' => 'Type B',
                'description' => 'Sample Description B',
                'niveau' => 'Niveau 2',
                'filliere' => 'Filliere B',
                'annee' => '2022-01-02',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more records as needed
        ]);
    }
}
