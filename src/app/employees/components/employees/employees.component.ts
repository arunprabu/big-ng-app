import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './employees.component.html',
  styles: ``,
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];

  // 1. connect to service using dep injection
  constructor( private employeeService: EmployeesService ) {
    console.log("1. Inside Constructor of EmployeesComponent ");
  }

  // Life cycle hook
  ngOnInit(): void {
    console.log("2. Inside ngOnInit of EmployeesComponent ");
    // This is the ideal place for us to hit rest api 
    // automatically be called after constructor
    // 2. send the req to the service
    this.employeeService.getEmployees()
      .subscribe((res: Employee[]) => { // 3. get the response from the service 
        console.log(res);
        this.employees = res;
      })
  }
}
