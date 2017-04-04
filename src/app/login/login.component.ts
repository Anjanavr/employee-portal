import { Component } from '@angular/core';

import { LoginService }  from '../login/mock-login.service';

import { User } from '../core/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService) { }

  user = new User('', '');

  signIn(): void {
    this.loginService.logIn(this.user);
  } 
};
