import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): void {
    console.log('login post called');

    this.http
      .post('http://localhost:8080/auth/login', null, {
        params: {
          username,
          password,
        },
      })
      .subscribe();
  }
}
