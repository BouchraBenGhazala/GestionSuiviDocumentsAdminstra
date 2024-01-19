<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\ConventionStage;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call(UserSeeder::class);
        $this->call(EtudiantSeeder::class);
        $this->call(DemandesSeeder::class);
<<<<<<< HEAD
        $this->call(ConventionSeeder::class);

=======
>>>>>>> 3e67a7493123a2aee996ae5ed0c121ea3a95623a
    }
}
