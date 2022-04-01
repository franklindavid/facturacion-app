<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ProductosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now('America/Bogota');
        DB::table('productos')->insert([
            'factura_id' => 1,      
            'nombre' => 'Gafas Protectoras',      
            'descripcion' => 'Descripcion Gafas Protectoras',      
            'cantidad' => 11,      
            'valor_unitario' => 6900,      
            'created_at'=>$now,
            'updated_at'=>$now,
        ]);

        DB::table('productos')->insert([
            'factura_id' => 1,      
            'nombre' => 'Guantes Hilasa Latex',      
            'descripcion' => 'Descripcion Guantes Hilasa Latex',      
            'cantidad' => 20,      
            'valor_unitario' => 4490,      
            'created_at'=>$now,
            'updated_at'=>$now,
        ]);

        DB::table('productos')->insert([
            'factura_id' => 1,      
            'nombre' => 'Bota Pvc Amarilla',      
            'descripcion' => 'Descripcion Bota Pvc Amarilla',      
            'cantidad' => 2,      
            'valor_unitario' => 46900,      
            'created_at'=>$now,
            'updated_at'=>$now,
        ]);

        DB::table('productos')->insert([
            'factura_id' => 2,      
            'nombre' => 'Segueta',      
            'descripcion' => 'Descripcion Segueta',      
            'cantidad' => 10,      
            'valor_unitario' => 5584,      
            'created_at'=>$now,
            'updated_at'=>$now,
        ]);
    }
}
