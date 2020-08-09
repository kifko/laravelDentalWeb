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
}
