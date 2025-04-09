import type { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts/concepts.component';
import { EmployeesComponent } from './employees/components/employees/employees.component';
import { AboutComponent } from './about/about.component';
import { AddEmployeeComponent } from './employees/components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employees/components/employee-details/employee-details.component';
import { LoginComponent } from './auth/components/login/login.component';
import { authGuard } from './auth/guards/auth.guard';

// Configuring the routes
export const routes: Routes = [
  { path: '', component: HomeComponent,  },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'employee-manager', component: EmployeesComponent, canActivate: [ authGuard]  },
  { path: 'employee-manager/add', component: AddEmployeeComponent },
  { path: 'employee-manager/:empId', component: EmployeeDetailsComponent }, // id - url param
  { path: 'about', component: AboutComponent },
  { path: 'auth/login', component: LoginComponent },
];


