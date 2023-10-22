<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Store;
use App\Http\Controllers\Controller;

class StoreController extends Controller
{

    public function index()
    {
        //
    }

    public function create(Request $request)
    {
        return Store::create([
            'name' => Str::random(16),
            'user_id' => auth()->user()->id
        ])->toArray();
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
