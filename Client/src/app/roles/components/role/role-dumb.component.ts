import {Component, Input} from '@angular/core';
import {Role} from '../../models/role.model';

@Component({
  selector: 'app-role-dumb',
  templateUrl: './role-dumb.component.html',
  styleUrls: ['./role-dumb.component.scss']
})
export class RoleDumbComponent {
  @Input() role: Role;
}
