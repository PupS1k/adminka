import {AbstractControl, ValidatorFn} from '@angular/forms';

export function positiveNumberValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const isNegativeNumber = Number(control.value) <= 0;
    return isNegativeNumber ? {age: {value: control.value}} : null;
  };
}
