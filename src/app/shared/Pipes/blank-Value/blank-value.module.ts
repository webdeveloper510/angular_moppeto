import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankValuePipe } from './blank-value.pipe';



@NgModule({
  declarations: [BlankValuePipe],
  imports: [
    CommonModule
  ],
  exports: [BlankValuePipe]
})
export class BlankValueModule { }
