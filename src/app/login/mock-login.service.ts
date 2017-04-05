import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';


import { User } from '../core/user';

@Injectable()

export class LoginService {

  isLoggedIn = false;
  loggedInUser;

  constructor (private http: Http, private router: Router) {}
  
  logIn(user) {

    return this.http
      .get('/app/assets/data/user-details.json')
      .subscribe((res: Response) => {
        let regUser = res.json().user;
        if (regUser.email === user.email && regUser.password === user.password) {
          this.router.navigate(['/dashboard']);
          this.isLoggedIn = true;
          this.loggedInUser = user;
        } else {
          this.router.navigate(['']);
        }
    })
  }

  logOut() {
    this.isLoggedIn = false;
    this.loggedInUser = {};
    this.router.navigate(['/login']);
  }
};
