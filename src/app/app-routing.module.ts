import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanTripComponent } from './plan-trip/plan-trip.component';

const routes: Routes = [
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
