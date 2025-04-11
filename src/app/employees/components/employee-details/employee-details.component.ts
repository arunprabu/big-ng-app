import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './employee-details.component.html',
  styles: ``
})
export class EmployeeDetailsComponent implements OnInit{
  employee!: Employee;
  employeeId: string;

  constructor(private employeesService: EmployeesService, private activatedRoute: ActivatedRoute) {
    // read url param empId
    this.employeeId = this.activatedRoute.snapshot.paramMap.get("empId") as string;
  }

  ngOnInit(): void {
    this.employeesService.getEmployeeById(this.employeeId)
      .subscribe((res: Employee) => {
        console.log(res);
        this.employee = res;
      })
  }
}
