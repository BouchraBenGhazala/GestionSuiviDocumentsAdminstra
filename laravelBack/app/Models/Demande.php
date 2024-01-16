<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demande extends Model
{
    use HasFactory;
    protected $table ='demandes';
    protected $fillable = [
        'etat',
        'type_demande',
        'description',
        'niveau',
        'filliere',
        'annee',
        'etudiant_id',
    ];


    public function etudiant()
    {
        return $this->belongsTo(Etudiant::class);
    }


}
