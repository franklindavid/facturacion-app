<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class factura extends Model
{
    use HasFactory;

    protected $table="facturas";

    protected $fillable=['numero_factura','fecha','nombre_emisor','nit_emisor','nombre_receptor','nit_receptor'];
   

    public function productos()
    {
        return $this->hasMany(Producto::class);
    }
}


