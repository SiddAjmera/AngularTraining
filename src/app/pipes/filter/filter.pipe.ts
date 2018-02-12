import { IUser } from './../../interfaces/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(input: IUser[], userIdType: string): IUser[] {
    if(userIdType === '') return input;
    return userIdType === 'even' ? input.filter(user => user.id % 2 === 0)
                                 : input.filter(user => user.id % 2 !== 0);
  }

}
