import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, DragDropModule,MatToolbarModule , MatStepperModule],
  exports: [MatButtonModule, MatCheckboxModule, DragDropModule,MatToolbarModule , MatStepperModule],
})
export class MaterialModule { }