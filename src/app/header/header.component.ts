import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  menu = [
    {path: '', name: 'Home', loggedIn: true, loggedOut: true},
    {path: 'project-create', name: 'New Project', loggedIn: true, loggedOut: false},
    {path: 'login', name: 'Log In', loggedIn: false, loggedOut: true},
    {path: 'sign-up', name: 'Sign Up', loggedIn: false, loggedOut: true}
  ]

  logout() {
    this.authService.logout();
    this.router.navigate([""]);
  }
}
