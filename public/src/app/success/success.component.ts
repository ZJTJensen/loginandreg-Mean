import { Component, OnInit } from '@angular/core';
import {User} from './../user';
import {UserService} from './../user.service';
import { Router } from '@angular/router';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FilterPipe, SortByPipe} from '../pipe'
import {BrowserModule} from '@angular/platform-browser'


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  user = null;
  words =[
    {word: 'this'}, {word: 'that'}, {word: 'there'}, {word: 'where'}, {word: 'no'}, {word: 'yes'}, {word: 'how'}, {word: 'when'}, {word: 'why'},
{word: 'not'}, {word: 'about'}, {word: 'mike'}
  ]
  constructor(
    private _us:UserService,
    private _router: Router
  ) {}
    
  create(){
    this._us.loggedIn.subscribe(
      (success) => {
        
        if(success === false){
          this._router.navigate(['login']);
          return
        }
        
        this.user=success
        
      },
      (err) => {console.log('err')}
    )
    
  }
  
  ngOnInit() {
    console.log('success')
    this.create()
    
  }

}
