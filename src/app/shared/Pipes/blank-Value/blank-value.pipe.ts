import { Pipe, PipeTransform } from '@angular/core';
import { TypeEnum } from '../../enums/common';

@Pipe({
  name: 'blankValue'
})
export class BlankValuePipe implements PipeTransform {

  transform(value: any, displayType = TypeEnum.DoubleDash): any {
    if (!value)
      return displayType === TypeEnum.DoubleDash ? "--" : '-';
    return value;
  }
}
