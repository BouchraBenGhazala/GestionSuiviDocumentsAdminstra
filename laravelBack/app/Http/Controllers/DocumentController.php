<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Demande;
use App\Models\AttestationBourse; 
use App\Models\CertificatScolarite;
use App\Models\ConventionStage;
use App\Models\ReleveNotes;
use App\Models\TerrainSport;

use Illuminate\Support\Facades\Validator;
class DocumentController extends Controller
{
    public function store(Request $request)
{
    $validatedData = $request->validate([
        'niveau' => 'required',
        'filiere' => 'required',
        'type_document' => 'required',
        'description' => 'required',
    ]);

    $demande = new Demande($validatedData);
    $demande->save();

    $documentTypes = [
        'Attestation De Bourse' => 'storeAttestationBourse',
        'Certificat De Scolarite' => 'storeCertificatScolarite',
        'Relevé De Notes'=>'storeReleveNotes',
        'Convention De Stage'=>'storeConventionDeStage',
        'Terrain De Sport'=>'storeTerrainDeSport'
            ];

    $typeDocument = $request->input('type_document');
    if (array_key_exists($typeDocument, $documentTypes)) {
        $this->{$documentTypes[$typeDocument]}($request, $demande->id);
    }

    return response()->json(['message' => 'Demande enregistrée avec succès'], 201);
}


    private function storeAttestationBourse(Request $request, $demandeId)
    {
        $validator = \Validator::make($request->all(), [
            'annee' => 'required',
            'lieu_de_naissance' => 'required',
            'type_bourse' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $attestationBourse = new AttestationBourse();
        $attestationBourse->annee = $request->input('annee');
        $attestationBourse->lieu_de_naissance = $request->input('lieu_de_naissance');
        $attestationBourse->type_bourse = $request->input('type_bourse');
        $attestationBourse->demande_id = $demandeId;
        $attestationBourse->save();
    }

    private function storeCertificatScolarite(Request $request, $demandeId)
    {
        $validator = \Validator::make($request->all(), [
            'date' => 'required',
            'lieu_de_naissance' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }
        $certificatScolarite= new CertificatScolarite();
        $certificatScolarite->date=$request->input('date');
        $certificatScolarite->lieu_de_naissance=$request->input('lieu_de_naissance');
        $certificatScolarite->demande_id = $demandeId;
        $certificatScolarite->save();
    }
    private function storeReleveNotes(Request $request, $demandeId)
    {
        $validator = \Validator::make($request->all(), [
            'niveau' => 'required',
            'annee' => 'required',
            'session' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }
        $certificatScolarite= new ReleveNotes();
        $certificatScolarite->niveau=$request->input('niveau');
        $certificatScolarite->annee=$request->input('annee');
        $certificatScolarite->session=$request->input('session');
        $certificatScolarite->demande_id = $demandeId;
        $certificatScolarite->save();
    }
    private function storeConventionDeStage(Request $request, $demandeId)
    {
        $validator = \Validator::make($request->all(), [
            'societe' => 'required',
            'date_debut' => 'required',
            'date_fin' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }
        $certificatScolarite= new ConventionStage();
        $certificatScolarite->date_debut=$request->input('date_debut');
        $certificatScolarite->date_fin=$request->input('date_fin');
        $certificatScolarite->societe=$request->input('societe');
        $certificatScolarite->demande_id = $demandeId;
        $certificatScolarite->save();
    }
    private function storeTerrainDeSport(Request $request, $demandeId)
    {
        $validator = \Validator::make($request->all(), [
            'date' => 'required',
            'heure_debut' => 'required',
            'heure_fin' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }
        $certificatScolarite= new TerrainSport();
        $certificatScolarite->date=$request->input('date');
        $certificatScolarite->heure_debut=$request->input('heure_debut');
        $certificatScolarite->heure_fin=$request->input('heure_fin');
        $certificatScolarite->demande_id = $demandeId;
        $certificatScolarite->save();
    }

    public function getDocuments()
    {
        return response()->json(Demande::all(), 200);
    }
}