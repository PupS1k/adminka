import {Component, Input} from '@angular/core';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-list-users-dumb',
  templateUrl: './list-users-dumb.component.html',
  styleUrls: ['./list-users-dumb.component.scss']
})
export class ListUsersDumbComponent {
  @Input() users: User[];
}
