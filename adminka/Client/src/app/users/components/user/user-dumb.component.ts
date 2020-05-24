import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-user-dumb',
  templateUrl: './user-dumb.component.html',
  styleUrls: ['./user-dumb.component.scss']
})
export class UserDumbComponent {
  @Input() user: User;

  @Output() deleteUser = new EventEmitter();

  onDeleteUser() {
    this.deleteUser.emit(this.user.id);
  }
}
