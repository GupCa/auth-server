import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(login: string, password: string): void {
    this.http
      .post('http://localhost:8080/auth/login', null, {
        params: {
          login,
          password,
        },
      })
      .subscribe(
        (data) => console.log(data),
        (err) => console.log(err)
      );
  }
}
