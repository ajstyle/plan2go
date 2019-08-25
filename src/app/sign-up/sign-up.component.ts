import { Component, OnInit } from '@angular/core';
import { ApiService} from '../service/api.service' ;
import Swal from 'sweetalert2';
import {Router} from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public apiService: ApiService , public router: Router ) { }
  gender = 'male';

  ngOnInit() {
  }

  register(val){
    console.log(val);

    this.apiService.register(val).subscribe(x => {
      
      Swal.fire('Register Successful', '' , 'success').then(res => {
        if(res){
          this.router.navigate(['login']);
        }
      } )
    }, err => {
      console.log(err)
      Swal.fire(err.error.message, '' , 'error').then(res => {
        if(res){
          this.router.navigate(['register']);
        }
    });
  });
  }
}
