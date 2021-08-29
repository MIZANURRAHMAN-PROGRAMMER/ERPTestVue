<?php

use Illuminate\Database\Seeder;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
       
    }

    public function defaultUser(){
        User::create([
            "name" => "Admin",
            "email" => "admin@gmail.com",
            "password" => bcrypt("12345678"),
            "image"=> "4350395439829349.jpg",

        ]);
    }
}
