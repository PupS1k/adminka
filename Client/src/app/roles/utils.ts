import {FormControl, FormGroup, Validators} from '@angular/forms';

export function getRoleForm(name, access) {
  return new FormGroup({
    name: new FormControl(name, [Validators.required, Validators.maxLength(10)]),
    access: new FormControl(access, [Validators.required, Validators.maxLength(10)])
  });
}
