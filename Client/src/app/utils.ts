import {FormControl, FormGroup, Validators} from '@angular/forms';
import {positiveNumberValidator} from './users/utils';

export function getUserForm(fullName, userName, age, role) {
  return new FormGroup({
    fullName: new FormControl(fullName, [Validators.required]),
    userName: new FormControl(userName, [Validators.required]),
    age: new FormControl(age, [Validators.required, positiveNumberValidator()]),
    role: new FormControl(role, [Validators.required])
  });
}

export function getRoleForm(name, access) {
  return new FormGroup({
    name: new FormControl(name, [Validators.required, Validators.maxLength(10)]),
    access: new FormControl(access, [Validators.required, Validators.maxLength(10)])
  });
}
