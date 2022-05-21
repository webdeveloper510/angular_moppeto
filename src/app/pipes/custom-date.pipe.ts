import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(dateInString: string): string {
    if (!dateInString)
      return null;

    return dateInString.slice(9);
  }

}
