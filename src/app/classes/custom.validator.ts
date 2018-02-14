import { ValidatorFn, AbstractControl } from '@angular/forms';

export class CustomValidator {
  static unique(control: AbstractControl): any {
    return (control.value === 'kold') ? { unique: true } : null;
  }

  static asyncUnique(control: AbstractControl): any {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        (control.value === 'kold') ? resolve({ unique: true }) : resolve(null);
      }, 2000);
    });
  }
}