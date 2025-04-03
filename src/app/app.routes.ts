import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts/concepts.component';
import { EmployeesComponent } from './employees/employees.component';
import { AboutComponent } from './about/about.component';

// Configuring the routes
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'employee-manager', component: EmployeesComponent },
  { path: 'about', component: AboutComponent },
];


