import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

export function positiveNumberValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const isNegativeNumber = Number(control.value) <= 0;
    return isNegativeNumber ? {age: {value: control.value}} : null;
  };
}

export function getUserForm(fullName, userName, age, roles) {
  return new FormGroup({
    fullName: new FormControl(fullName, [Validators.required]),
    userName: new FormControl(userName, [Validators.required]),
    age: new FormControl(age, [Validators.required, positiveNumberValidator()]),
    role: new FormControl(roles, [Validators.required])
  });
}
