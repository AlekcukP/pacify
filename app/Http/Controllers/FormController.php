<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;


abstract class FormController extends Controller
{
    /**
     * Display a form entity.
     */
    public function index(Request $request)
    {
        return response()->json($request->view_rules());
    }

    // /**
    //  * Show the form for creating a new resource.
    //  */
    public function create()
    {
        
    }

    /**
     * Store a newly created form in storage.
     */
    public function store($request)
    {
        //
    }

    /**
     * Update the specified form in storage.
     */
    public function update($request, string $id)
    {
        //
    }

    /**
     * Remove the specified form from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
