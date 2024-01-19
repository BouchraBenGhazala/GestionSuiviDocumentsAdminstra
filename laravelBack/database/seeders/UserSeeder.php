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
<<<<<<< HEAD
         User::create([
             'nom' => 'Benghazala',
             'prenom' => 'Bouchra',
             'email' => 'bouchrabenghazala@gmail.com',
             'password' => bcrypt('stage2023'),
             'role' =>'admin'
         ]);
         User::create([
             'nom' => 'Hanine',
             'prenom' => 'Nadia',
             'email' => 'nadia@gmail.com',
             'password' => bcrypt('hanine'),
             'role' =>'etudiant'
         ]);
=======
        //DB::table('users')->truncate();
        // User::create([
        //     'nom' => 'Benghazala',
        //     'prenom' => 'Bouchra',
        //     'email' => 'bouchrabenghazala@gmail.com',
        //     'password' => bcrypt('stage2023'),
        //     'role' =>'admin'
        // ]);
        User::create([
            'nom' => 'Kefsi',
            'prenom' => 'Abdou',
            'email' => 'Abdou@gmail.com',
            'password' => bcrypt('kefsi'),
            'role' =>'etudiant'
        ]);
>>>>>>> 7eb6c312621eea66c8ee729d6d75320385b405ae
    }
}
