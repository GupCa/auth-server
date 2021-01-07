import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import * as http from 'http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): void {
    console.log('login post called');
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    this.http
      .post('http://localhost:8080/auth/login', formData, {
        observe: 'response' as 'body',
      })
      .subscribe(
        (data) => {
          console.log('success');
          console.log(data);
        },
        (err) => {
          console.log('error');
          console.log(err);
        }
      );
  }
}
