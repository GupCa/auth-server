import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
        (err: HttpErrorResponse) => {
          if (err.url) {
            console.warn(
              `REDIRECTING MANUALLY TO ${err.url}CAUSE BROWSER CANT`
            );

            window.location.replace(err.url);
          }
          console.log('error');
          console.log(err);
        }
      );
  }
}
