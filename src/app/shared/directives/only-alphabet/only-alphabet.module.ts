import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyAlphabetDirective } from './only-alphabet.directive';



@NgModule({
  declarations: [
    OnlyAlphabetDirective
  ],
  exports: [
    OnlyAlphabetDirective
  ],
  imports: [
    CommonModule
  ]
})
export class OnlyAlphaModule { }
