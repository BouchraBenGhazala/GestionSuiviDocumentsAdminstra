<?php

namespace Database\Seeders;

use App\Models\Etudiant;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EtudiantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Etudiant::create([
            'cne' => 'Y1234',
            'code_apogee' => '45729462',
            'image' => 'https://cdn.vectorstock.com/i/preview-1x/96/75/avatar-9-vector-32409675.jpg',
            'tel' => '0608080808',
            'datenais' => '2003-06-01',
            'user_id' => 4
        ]);
    }
}
