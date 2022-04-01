<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class FacturasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now('America/Bogota');
        DB::table('facturas')->insert([
            'numero_factura' => "Fac-001",   
            'fecha' => date("Y-m-d H:i:s",strtotime("2003-01-05 8:12:15")),     
            'nombre_emisor' => "Homecenter",     
            'nit_emisor' => "860.002.688-6",     
            'nombre_receptor' => "Banco Falabella S.A.",     
            'nit_receptor' => "900.047.981-8",     
            'created_at'=>$now,
            'updated_at'=>$now,
        ]);

        DB::table('facturas')->insert([
            'numero_factura' => "Fac-002",   
            'fecha' => date("Y-m-d H:i:s",strtotime("2004-01-05 9:12:15")),     
            'nombre_emisor' => "Easy",     
            'nit_emisor' => "900.017.447-8",     
            'nombre_receptor' => "Linio Colombia S.A.S.",     
            'nit_receptor' => "900.499.362-8",     
            'created_at'=>$now,
            'updated_at'=>$now,
        ]);
    }
}
