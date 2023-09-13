<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Store;
use Illuminate\Support\Facades\Auth;

class StoreController extends Controller
{

    public function index()
    {
        //
    }

    public function create(Request $request)
    {
        $store = Store::create([
            'user_id' => auth()->user()->id,
            'name' => auth()->user()->full_name . 'Store'
        ]);

        return $this->response(['store' => $store]);
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function delete(string $id)
    {
        //
    }
}
