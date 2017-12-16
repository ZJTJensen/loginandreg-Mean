import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  loggedIn = new Subject<any>();
  holdUser(user: User) {
    this.loggedIn.next(user);
  }
  clearUser() {
      this.loggedIn.next();
  }

  sessionCheck(callBack){
    this._http.get('/session').map(Response=>Response.json()).subscribe(
      (success) => {
        console.log(success)
        this.holdUser(success)
        if( typeof callBack== 'function'){
          callBack()
          console.log("heelo")
        }
      }
    )
  }


  constructor(private _http: Http) { }
  show(){
    return this._http.get('/')
  }
  register(user: User){
    return this._http.post('/register', user)
  }
  login(user: User){
    return this._http.post('/login', user).map(Response=>Response.json())
  }
}
