import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private authService: AuthService) {}

  signUp(signUpForm: NgForm) {
    const user: User = {
      name: signUpForm.value["name"],
      email: signUpForm.value["email"],
      password: signUpForm.value["password"],
    };
    console.log(user);
    this.authService.createUser(user);
  }
}
