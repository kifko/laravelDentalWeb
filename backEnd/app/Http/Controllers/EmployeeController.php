<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    function getEmployee()
    {
        $employeeModel = new Employee();
        $data = $employeeModel->getEmployee();
        return response()->json($data);
    }
    function addEmployee(Request $request)
    {
        $employeeModel = new Employee();
        $data = $employeeModel->addEmployee($request->all());
        // dd($data);
    }
}
