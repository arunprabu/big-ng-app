import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private REST_API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

   // 1. get the request from the comp 
  getEmployees() {
    // 2. send the req to the REST API 
    // 2.1. What's the REST API URL? REST_API_URL
    // 2.2. What's the HTTP Method? GET
    // 2.3. What's the REST API Client? HttpClient
    return this.http.get(this.REST_API_URL);
    // 3. receive the response from the REST API 
    // 4. send it back to the component 
  }

  // add employee 
  addEmployee(employee: any){ // 1. get the form data from the component
    console.log(employee);
    // 2. send the form data to the REST API
    // 2.1. What's the REST API URL? REST_API_URL
    // 2.2. What's the Http Method? POST
    // 2.3 What's the REST API Client? HttpClient
    return this.http.post(this.REST_API_URL, employee);
    // 3. get the response from REST API 
    // 4. send it back to the component
  }

  // get employee details 
  getEmployeeById(id: string | number) {
    return this.http.get(this.REST_API_URL + '/' + id);
  }

  // update employee 

  // delete employee 

  // search employee 
}


