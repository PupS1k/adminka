import {Component, Input} from '@angular/core';
import {Role} from '../../models/role.model';

@Component({
  selector: 'app-role-smart',
  template: `
    <app-role-dumb
      [role]="role"
    ></app-role-dumb>
  `
})
export class RoleSmartComponent {
  @Input() role: Role;


}
