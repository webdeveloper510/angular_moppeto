import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(status: string): string {
    if (!status)
      return null;

    return status.substr(0, 1).toLocaleUpperCase() + status.substr(1).toLocaleLowerCase();
  }

}
