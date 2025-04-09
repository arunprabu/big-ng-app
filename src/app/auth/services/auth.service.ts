import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  REST_API_URL = "https://reqres.in/api/login";

  constructor(private httpClient: HttpClient) { }

  login(credentials: any) {
    console.log(credentials);

    return this.httpClient.post(this.REST_API_URL, credentials);

  }
}
