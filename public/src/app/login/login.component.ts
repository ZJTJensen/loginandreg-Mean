import { Component, OnInit } from '@angular/core';
import {User} from './../user';
import {UserService} from './../user.service';
import { Router } from '@angular/router';



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

  create(user) {
    this._us.register(user).subscribe(
        (success) => {success},
        (err) => {console.error(err)}
    )
    this._router.navigate(['']);
}


  ngOnInit() {
  }

}
