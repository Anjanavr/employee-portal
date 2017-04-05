import { Component } from '@angular/core';

import { LoginService }  from '../login/mock-login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  title = 'Employee Portal';

  constructor (private loginService: LoginService) {}

  isLoggedIn = this.loginService.isLoggedIn;
  loggedInUser = this.loginService.loggedInUser ? this.loginService.loggedInUser : {email: 'test', password: '123'};

  signOut() {
    this.loginService.logOut();
  }
}
