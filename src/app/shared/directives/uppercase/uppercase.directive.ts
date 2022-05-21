import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[uppercase]'
})
export class UppercaseDirective {
  
  constructor(private el: ElementRef, private ngControl: NgControl) {
  }

  @HostListener('input', ['$event']) onInputChange($event) {
    const value = $event.target.value.toUpperCase();
    this.ngControl.control.setValue(value);
  }

}
