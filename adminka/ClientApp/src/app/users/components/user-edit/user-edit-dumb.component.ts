import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Role} from '../../../roles/models/role.model';

@Component({
  selector: 'app-user-edit-dumb',
  templateUrl: './user-edit-dumb.component.html',
  styleUrls: ['./user-edit-dumb.component.scss']
})
export class UserEditDumbComponent {
  @Input() userForm: FormGroup;
  @Input() roles: Role[];
  @Input() isUpdate: boolean;

  @Output() edit = new EventEmitter();

  onSubmit() {
    const user = {
      fullName: this.userForm.value.fullName,
      userName: this.userForm.value.userName,
      age: this.userForm.value.age,
      roles: this.userForm.value.role
    };

    this.edit.emit(user);
  }
}
