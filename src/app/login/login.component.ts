import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    name: [''],
    password: [''],
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // window.location.replace(
    //   `http://localhost:8080/auth/login?username=admin&password=admin`
    // );
    console.log('onSubmit called');

    const formData = new FormData();

    formData.append('username', this.loginForm.value.name);
    formData.append('password', this.loginForm.value.password);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/auth/login');
    xhr.send(formData);

    // this.authService.login(
    //   this.loginForm.value.name,
    //   this.loginForm.value.password
    // );
  }
}
