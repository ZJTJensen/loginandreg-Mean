import { Component, OnInit } from '@angular/core';
import {User} from './../user';
import {UserService} from './../user.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _us:UserService,
    private _router: Router
  ) { }

  user = new User()
  logins = new User()
  err;
  loginerrs;

  create(user) {
    this._us.register(user).subscribe(
        (success) => {success},
        (err) => {
          this.err = JSON.parse(err._body)
          console.log(err)
        }
    )
    
    this.user = new User()
    this._router.navigate(['login']);
    
  }
  login(logins){
    this._us.login(logins).subscribe(
      (success) => {
        console.log(success)
        this._us.holdUser(success)
        this._router.navigate(['success'])
        this.logins = new User()
      },
      (err) => {
        return this.loginerrs = true
      }
    )
  }

  ngOnInit() {
  }
}