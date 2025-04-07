import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './employees.component.html',
  styles: ``,
})
export class EmployeesComponent implements OnInit {
  employees: any[] = [];

  // 1. connect to service using dep injection
  constructor( private employeeService: EmployeesService ) {
    console.log("1. Inside Constructor of EmployeesComponent ");
  }

  ngOnInit(): void {
    console.log("2. Inside ngOnInit of EmployeesComponent ");
    // This is the ideal place for us to hit rest api 
    // 2. send the req to the service
    this.employeeService.getEmployees()
      .subscribe((res: any) => { // 3. get the response from the service 
        console.log(res);
        this.employees = res;
      })
  }



}
