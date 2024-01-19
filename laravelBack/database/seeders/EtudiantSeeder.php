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
<<<<<<< HEAD
        // Etudiant::create([
        //     'cne' => '123456789',
        //     'code_apogee' => 'AP123',
        //     'image' => 'path/to/image.jpg',
        //     'tel' => '0123456789',
        //     'datenais' => '2000-01-01',
        // ]);
=======
        Etudiant::create([
            'cne' => 'Y1234',
            'code_apogee' => '45729462',
            'image' => 'https://cdn.vectorstock.com/i/preview-1x/96/75/avatar-9-vector-32409675.jpg',
            'tel' => '0608080808',
            'datenais' => '2003-06-01',
            'user_id' => 4
        ]);

>>>>>>> 3e67a7493123a2aee996ae5ed0c121ea3a95623a
    }
}
