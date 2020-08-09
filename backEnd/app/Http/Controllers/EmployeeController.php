<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Employee;

class EmployeeController extends Controller
{
    function getEmployee()
    {
        $employeeModel = new Employee();
        $data = $employeeModel->getEmployee();
        return response()->json($data);
    }
}
