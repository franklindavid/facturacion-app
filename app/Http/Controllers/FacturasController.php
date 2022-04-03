<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Factura;
use App\Models\Producto;

class FacturasController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth:api');
    // }

    public function index()
    {
        $facturas = Factura::with('productos')->get();
            
        return response()->json($facturas);
    }
    public function store(Request $request)
    {
        $factura = new Factura; 
        $factura->numero_factura=$request->numero_factura;
        $factura->fecha=$request->fecha;  
        $factura->nombre_emisor=$request->nombre_emisor;  
        $factura->nit_emisor=$request->nit_emisor;  
        $factura->nombre_receptor=$request->nombre_receptor;  
        $factura->nit_receptor=$request->nit_receptor; 
        $factura->save();  

        foreach ($request->producto as $producto){
            $productoN = new Producto; 
            $productoN->factura_id=$factura->id;
            $productoN->nombre=$producto['nombre'];
            $productoN->descripcion=$producto['descripcion'];
            $productoN->cantidad=$producto['cantidad'];
            $productoN->valor_unitario=$producto['valor_unitario'];
            $productoN->save();
        }

        return response()->json([           
            'factura'=>$factura
        ]);        
    }

    public function edit(Request $request,$id)
    {
        $factura = Factura::find($id); 
        return response()->json([           
            'factura'=>$factura
        ]); 
    }

    public function update(Request $request,$id)
    {  
        $factura = Factura::find($id);   
        $factura->numero_factura=$request->numero_factura;
        $factura->fecha=$request->fecha;  
        $factura->nombre_emisor=$request->nombre_emisor;  
        $factura->nit_emisor=$request->nit_emisor;  
        $factura->nombre_receptor=$request->nombre_receptor;  
        $factura->nit_receptor=$request->nit_receptor;  
        $factura->update();      
        return response()->json([           
            'factura'=>$factura
        ]); 
    }

    public function destroy($id)
    {  
        $factura = Factura::find($id);  
        $factura->delete(); 
        return response()->json([
            'mensaje'=>'La Factura ha sido eliminada exitosamente!'
        ]); 
    }
}
