<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class producto extends Model
{
    use HasFactory;

    protected $table="productos";

    protected $fillable=['nombre','factura_id','descripcion','cantidad','valor_unitario'];
    

    public function factura(){
        return $this->belongsTo(Factura::class);
    }
}
