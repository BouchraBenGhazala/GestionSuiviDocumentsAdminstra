<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etudiant extends Model
{
    use HasFactory;
    protected $table ='etudiants';
    protected $fillable = [
        'cne',
        'nom',
        'prenom',
        'email',
        'image',
        'mdp',
        'tel',
        'datenais',
        'group_id'
    ];
    public function groupe(){
        return $this->belongsTo(Groupe::class);
    }
    public function documents()
    {
        return $this->hasMany(Document::class);
    }
    public function demandes()
    {
        return $this->hasMany(Demande::class);
    }
}
