import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service' ; 

import {Router} from '@angular/router' ; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public apiService: ApiService , public router: Router)  { }
  message: string ;
  loginStatus = false ;
  ngOnInit() {
  }


  login(loginForm){
    this.loginStatus = true ;

    console.log(loginForm);
    this.apiService.login(loginForm).subscribe(user => {
      if(user) {
        this.loginStatus = false ; 

        this.router.navigate(['planTrip']);
      }
    } , err => {
      this.loginStatus = false ; 

      this.message = err.error.message ;
    })
  }
}
