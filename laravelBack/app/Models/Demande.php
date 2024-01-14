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
        'raison',
        'admin_id',
        'etudiant_id',
        'type_demande_id',  
    ];

    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }
    public function etudiant()
    {
        return $this->belongsTo(Etudiant::class);
    }
    public function type_demande()
    {
        return $this->belongsTo(TypeDemande::class);
    }

}
