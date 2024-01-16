<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Document2; // Assurez-vous d'importer votre modèle Document ici

class DocumentController extends Controller
{
    public function store(Request $request)
    {
        // Validation des données
        $validatedData = $request->validate([
            'niveau' => 'required',
            'filiere' => 'required',
            'typeDocument' => 'required',
            'description' => 'required',
        ]);

        // Création d'une nouvelle instance du modèle Document
        $document = new Document2();

        // Attribution des valeurs du formulaire au modèle
        $document->niveau = $validatedData['niveau'];
        $document->filiere = $validatedData['filiere'];
        $document->type_document = $validatedData['typeDocument'];
        $document->description = $validatedData['description'];

        // Sauvegarde du document dans la base de données
        $document->save();

        // Vous pouvez également renvoyer une réponse JSON pour confirmer la sauvegarde
        return response()->json(['message' => 'Document enregistré avec succès'], 201);
    }
    public function getDocuments(){
        return response()->json(Document2::all(),200);
    }
}
