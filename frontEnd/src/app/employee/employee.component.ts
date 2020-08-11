import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  dataArr: any;
  employee = new Employee();
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.dataService.getData().subscribe((res) => {
      this.dataArr = res;
    });
  }

  insertData() {
    this.dataService.insertData(this.employee).subscribe((res) => {
      this.getEmployeeData();
    });
  }
  deleteData(id) {
    this.dataService.deleteData(id).subscribe((res) => {
      this.getEmployeeData();
    });
  }
}
