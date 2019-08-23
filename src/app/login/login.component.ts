import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service' ; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public apiService : ApiService) { }

  ngOnInit() {
  }


  login(loginForm){
    console.log(loginForm);
    this.apiService.login(loginForm).subscribe(user => {
      console.log('user=====',user);
    })
  }
}
