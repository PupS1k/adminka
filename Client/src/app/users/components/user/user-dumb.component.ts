import {Component, Input} from '@angular/core';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-user-dumb',
  templateUrl: './user-dumb.component.html',
  styleUrls: ['./user-dumb.component.scss']
})
export class UserDumbComponent {
  @Input() user: User;
}
