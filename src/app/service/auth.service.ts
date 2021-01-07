import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): void {
    console.log('login post called');
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'text/html',
    });

    this.http
      .post('http://localhost:8080/auth/login', null, {
        params: {
          username,
          password,
        },
        headers,
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
