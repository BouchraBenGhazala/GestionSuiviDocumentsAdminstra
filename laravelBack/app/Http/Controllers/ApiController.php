<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Demande;

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
}
