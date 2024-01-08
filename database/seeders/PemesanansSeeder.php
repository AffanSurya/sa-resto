<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PemesanansSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('pemesanans')->insert([
            'nomor_meja' => fake()->randomNumber(),
            'nama' => fake()->name(),
            'pesanan' => fake()->sentence(),
        ]);
    }
}
