import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menu = [
    {path: '', name: 'Home'},
    {path: 'project-create', name: 'New Project'},
    {path: 'login', name: 'Log In'},
    {path: 'sign-up', name: 'Sign Up'}
  ]
}
