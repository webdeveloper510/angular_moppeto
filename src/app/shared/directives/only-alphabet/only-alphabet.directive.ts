import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appOnlyAlpha]'
})
export class OnlyAlphabetDirective {

  // Allow only alphabet with space
  private regex: RegExp = new RegExp(/^[A-Za-z ]*$/g);

  private specialKeys: Array<string> = ['Shift', 'Backspace', 'Tab', 'End', 'Home', 'Ctrl'];

  constructor(private el: ElementRef, private ngControl: NgControl) {
    (el.nativeElement as HTMLInputElement).value = '';

  }

  @HostListener('keypress', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let current: string = this.el.nativeElement.value;
    let next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }


  @HostListener('keyup', ['$event']) onEvent($event) {
    var letters = /^[A-Za-z ]+$/;
    if (this.el.nativeElement.value.includes('') || this.el.nativeElement.value.includes('\n') || !this.el.nativeElement.value.match(letters)) {
      let valueToTransform = this.el.nativeElement.value.replace(/[^\w\s]/gi, '');
      //valueToTransform = valueToTransform.replace(/ /g, '');
      this.ngControl.control.setValue(valueToTransform);
    }
  }

}
