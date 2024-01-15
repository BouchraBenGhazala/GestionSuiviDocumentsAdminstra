<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AttestationBourse extends Model
{
    use HasFactory;
    protected $table ='attestation_de_bourse';
    protected $fillable = [
        'annee',
        'lieu_de_naissance',
        'type_bourse',
        'demande_id',


    ];


    public function demande()
    {
        return $this->belongsTo(Demande::class);
    }
}
