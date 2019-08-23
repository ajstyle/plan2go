import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanTripComponent } from './plan-trip/plan-trip.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'register',
    component: SignUpComponent
  },
  {
    path : '',
    component: PlanTripComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
