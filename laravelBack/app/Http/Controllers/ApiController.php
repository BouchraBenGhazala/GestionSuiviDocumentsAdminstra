<?php

namespace App\Http\Controllers;

use App\Models\AttestationBourse;
use App\Models\CertificatScolarite;
use App\Models\ConventionStage;
use Illuminate\Http\Request;
use App\Models\Demande;
use App\Models\Etudiant;
use App\Models\User;
use Faker\Core\Number;

class ApiController extends Controller
{
    // public function getData()
    // {
    //     // Replace this with your actual data retrieval logic
    //     $data = [
    //         ['id' => 1, 'name' => 'Item 1'],
    //         ['id' => 2, 'name' => 'Item 2'],
    //         ['id' => 3, 'name' => 'Item 3'],
    //     ];

    //     return response()->json($data);
    // }


    public function getDemandes(){
        return response() -> json(Demande::all(), 200);
    }

    public function getFiltresDemandes(Request $request, string $state)  {
        $demandes = Demande::where('etat', $state)->get();
        return response() -> json($demandes, 200);
    } 

    public function getEtudiant(Request $request){
        $id = $request -> input('id');
        $etudiant = Etudiant::where('id', $id)->get();
        $withUser = Etudiant::with('user')->find($id)->user;
        $etudiantAvecUser = $etudiant->map(function ($item, $key) use ($withUser) {
            $item['nom'] =  $withUser->nom;
            $item['prenom'] =  $withUser->prenom;
            return $item;
        });
        // $name = User::find($etudiant -> user_id);
        // $user = Etudiant::with('user')->find($id, ['nom', 'prenom']);
        return response() -> json($etudiantAvecUser, 200);
    }

    public function getInfosType(Request $request,string $type, int $id) {
        // $classe = $type::find($id);
        $class = resolve("App\\Models\\$type");
        $data = $class::where('demande_id', $id);
        return response() -> json($data, 200);
        
    }
}
