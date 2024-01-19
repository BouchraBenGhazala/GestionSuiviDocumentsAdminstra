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
        //  User::create([
        //      'nom' => 'Benghazala',
        //      'prenom' => 'Bouchra',
        //      'email' => 'bouchrabenghazala@gmail.com',
        //      'password' => bcrypt('stage2023'),
        //      'role' =>'admin'
        //  ]);
        //  User::create([
        //      'nom' => 'Hanine',
        //      'prenom' => 'Nadia',
        //      'email' => 'nadia@gmail.com',
        //      'password' => bcrypt('hanine'),
        //      'role' =>'etudiant'
        //  ]);
    }
}
