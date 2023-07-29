<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class ApiController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        

        return response()->json([
            'data' => $categories
        ]);
    }
}
