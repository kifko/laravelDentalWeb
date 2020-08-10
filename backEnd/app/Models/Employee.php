<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;

class Employee
{
    function getEmployee()
    {
        $data = DB::table('employee')->get();
        return $data;
    }
    function addEmployee($data)
    {;
        // dd($data)
        // dd("model called");
        DB::table('employee')->insert($data);
    }
}
