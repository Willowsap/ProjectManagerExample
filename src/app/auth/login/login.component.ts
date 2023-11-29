import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(loginForm: NgForm) {
    const user = this.authService.login({
      email: loginForm.value["email"],
      password: loginForm.value["password"]
    });
    if (user) {
      this.router.navigate([""]);
    } else {
      alert("Invalid Credentials");
    }
  }
}
