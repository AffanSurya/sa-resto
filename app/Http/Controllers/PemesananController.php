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
        return Inertia::render('Home');
    }

    public function order(Request $request)
    {
        $pesanan = $request->input('pesanan', []);
        return Inertia::render('Order', [
            'pesanan' => $pesanan,
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {


        // if (!$pesanan->save()) {
        //     $errors = $pesanan->getErrors();
        //     // Log or dump errors for debugging
        //     dd($errors);
        // }


    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $pemesanan = new Pemesanan();
        // $pemesanan->nomor_meja = "2B";
        // $pemesanan->nama = 'Affan';
        // $pemesanan->pesanan = json_encode(['Burger', 'Burger']);
        $pemesanan->nomor_meja = $request->nomor_meja;
        $pemesanan->nama = $request->nama;
        $pemesanan->pesanan = json_encode($request->pesanan);
        $pemesanan->save();

        return Inertia::location('/' . $pemesanan->id);

        // return redirect()->back()->with('message', 'Pesanan Berhasil dibuat');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $pemesanan = Pemesanan::findOrFail($id);

        return Inertia::render('Home', [
            'pemesanan' => [
                'id' => $pemesanan->id,
                'nomor_meja' => $pemesanan->nomor_meja,
                'nama' => $pemesanan->nama,
                'pesanan' => $pemesanan->pesanan,
                'created_at' => $pemesanan->created_at->format('Y-m-d H:i:s'),
                'updated_at' => $pemesanan->updated_at->format('Y-m-d H:i:s'),
            ],
        ]);
    }

    public function showv2()
    {
        $pemesanan = Pemesanan::all();
        return Inertia::render('Dashboard', [
            'pemesanan' => $pemesanan,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $pemesanan = Pemesanan::findOrFail($id);
        return Inertia::render('Edit', [
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
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        Pemesanan::where('id', $request->id)->update([
            'nomor_meja' => $request->nomor_meja,
            'nama' => $request->nama,
            'pesanan' => $request->pesanan,
        ]);
        return Inertia::location('/' . $request->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $pemesanan = Pemesanan::find($request->id);
        $pemesanan->delete();

        return Inertia::location('/');
    }
}
