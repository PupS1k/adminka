import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {RoleForm} from '../../models/role-form.model';

@Component({
  selector: 'app-role-edit-dumb',
  templateUrl: './role-edit-dumb.component.html',
  styleUrls: ['./role-edit-dumb.component.scss']
})
export class RoleEditDumbComponent {
  @Input() roleForm: FormGroup;

  @Output() edit = new EventEmitter();

  onSubmit() {
    const role: RoleForm = this.roleForm.value;
    this.edit.emit(role);
  }
}
