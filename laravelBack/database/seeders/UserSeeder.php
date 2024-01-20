<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

         User::create([
             'nom' => 'Mme El Faquih',
             'prenom' => 'Loubna',
             'email' => 'mmeElFaqihLoubna@gmail.com',
             'password' => bcrypt('loubna123'),
             'role' =>'admin'
         ]);
         User::create([
             'nom' => 'Hanine',
             'prenom' => 'Nadia',
             'email' => 'nadia@gmail.com',
             'password' => bcrypt('hanine'),
             'role' =>'etudiant'
         ]);

        User::create([
            'nom' => 'Kefsi',
            'prenom' => 'Abdou',
            'email' => 'Abdou@gmail.com',
            'password' => bcrypt('kefsi'),
            'role' =>'etudiant'
        ]);
        User::create([
            'nom' => 'benghazala',
            'prenom' => 'bouchra',
            'email' => 'ghazala@gmail.com',
            'password' => bcrypt('ghazala'),
            'role' =>'etudiant'
        ]);

    }
}
