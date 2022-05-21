import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercaseDirective } from './uppercase.directive';



@NgModule({
  declarations: [
    UppercaseDirective
  ],
  exports: [UppercaseDirective],
  imports: [
    CommonModule
  ]
})
export class UppercaseModule { }
