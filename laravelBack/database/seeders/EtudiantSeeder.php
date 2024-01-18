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
            'cne' => 'B1234E',
            'code_apogee' => '190254',
            'image' => 'https://thumbs.dreamstime.com/b/portrait-femelle-de-femme-d-avatar-d-ic-ne-de-profil-47075231.jpg',
            'tel' => '0612345678',
            'datenais' => '2002-01-14',
            'user_id' => 2,
     ]);
    }
}
