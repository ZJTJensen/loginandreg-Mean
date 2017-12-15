import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }
  show(){
    return this._http.get('/')
  }
  register(user: User){
    return this._http.post('/register', user)
  }
}
