<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now('America/Bogota');
        DB::table('users')->insert([
            'name' => 'Franklin David',
            'email' => 'franklindavid91@gmail.com',
            'password' => Hash::make('password'),
            'created_at'=>$now,
            'updated_at'=>$now,            
        ]);

        DB::table('users')->insert([
            'name' => 'Ana delgado',
            'email' => 'anadelgado3007@gmail.com',
            'password' => Hash::make('password'),
            'created_at'=>$now,
            'updated_at'=>$now,            
        ]);
    }
}
