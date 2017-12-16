import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    private _us:UserService,
    private _router: Router
  
  ) { }



  ngOnInit(){
    this._us.sessionCheck(function(){})
  }
}
