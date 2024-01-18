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
            'cne' => '123456789',
            'code_apogee' => 'AP123',
            'image' => 'path/to/image.jpg',
            'tel' => '0123456789',
            'datenais' => '2000-01-01',
        ]);

    }
}
