import {Component, Input} from '@angular/core';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-user-smart',
  template: `
    <app-user-dumb
      [user]="user"
    ></app-user-dumb>
  `
})
export class UserSmartComponent {
  @Input() user: User;
}
