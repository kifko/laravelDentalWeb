import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.dataService.getData().subscribe((res) => {
      console.log(res);
    });
  }
}
