import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  REST_API_URL = 'https://jsonplaceholder.typicode.com/users';

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
}


