import {Component, Input} from '@angular/core';
import {Role} from '../../models/role.model';

@Component({
  selector: 'app-list-roles-dumb',
  templateUrl: './list-roles-dumb.component.html',
  styleUrls: ['./list-roles-dumb.component.scss']
})
export class ListRolesDumbComponent {
  @Input() roles: Role[];
}
