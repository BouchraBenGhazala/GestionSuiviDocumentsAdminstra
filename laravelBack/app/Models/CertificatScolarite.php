<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CertificatScolarite extends Model
{
    use HasFactory;
    protected $table ='convention_de_stage';
    protected $fillable = [
        'date',
        'lieu_de_naissance',
        'demande_id',


    ];


    public function demande()
    {
        return $this->belongsTo(Demande::class);
    }
}
