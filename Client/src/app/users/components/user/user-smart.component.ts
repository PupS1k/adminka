import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-smart',
  template: `
    <app-user-dumb
      [user]="user"
      (deleteUser)="onDeleteUser($event)"
    ></app-user-dumb>
  `
})
export class UserSmartComponent {
  @Input() user: User;

  @Output() deleteUser = new EventEmitter();

  constructor(private userService: UserService) {
  }

  onDeleteUser(id) {
    this.userService.deleteUser(id).subscribe(() => this.deleteUser.emit(id));
  }
}
