import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './add-employee.component.html',
  styles: ``
})
export class AddEmployeeComponent {
  // Step 0: Have the HTML form first [DONE]
  // Step 1: Have the TS logic for the html form tag
  addEmployeeForm: FormGroup;
  isSaved = false;

  constructor(private employeesService: EmployeesService) {
    // Step 1 continues..
    this.addEmployeeForm = new FormGroup({
      // Step 2. Have the TS logic for the input tags 
      name: new FormControl('', Validators.required), // Step 5: Let's work on validation
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });

    // Step 3: refer the html of this component
  }

  handleAddEmployee() {
    console.log("submitted");
    // let's collect the submittable form data
    console.log(this.addEmployeeForm.value);

    // 1. send the above data to employee service 
    this.employeesService.addEmployee(this.addEmployeeForm.value)
      .subscribe((res: any) => { // 2. receive the response from the employee service
        console.log(res);
        this.isSaved = true;
      });
  }
}
