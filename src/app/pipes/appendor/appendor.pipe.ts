import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendor'
})
export class AppendorPipe implements PipeTransform {

  transform(input: string, position: string, stringToAppend: string): string {
    if(stringToAppend === '')
      return input;

    return position === 'pre' ? stringToAppend + input: input + stringToAppend;
  }

}
