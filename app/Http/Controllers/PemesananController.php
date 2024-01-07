<?php

namespace App\Http\Controllers;

use App\Models\Pemesanan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PemesananController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $pemesanan = Pemesanan::all();
        // return Inertia::render('Homepage', [
        //     'pemesanan' => $pemesanan,
        // ]);
        return Inertia::render('Homepage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $pemesanan = Pemesanan::findOrFail($id);
        return Inertia::render('Homepage', [
            'pemesanan' => [
                'id' => $pemesanan->id,
                'nomor_meja' => $pemesanan->nomor_meja,
                'nama' => $pemesanan->nama,
                'pesanan' => $pemesanan->pesanan,
                'created_at' => $pemesanan->created_at->format('Y-m-d H:i:s'),
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pemesanan $pemesanan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pemesanan $pemesanan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pemesanan $pemesanan)
    {
        //
    }
}
