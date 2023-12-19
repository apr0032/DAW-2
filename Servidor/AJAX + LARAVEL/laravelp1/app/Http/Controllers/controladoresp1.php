<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class controladoresp1 extends Controller
{
    public function getAnimales(){
        $animales = ['Mono' , 'Leon' , 'Gazela' , 'Hiena' , 'Simba'];

        return response()->json(['mensaje' => 'Estos son mis animales', 'datos' => $animales]);
    }
}
