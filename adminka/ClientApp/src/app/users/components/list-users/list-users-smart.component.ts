import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-users-smart',
  template: `
    <app-list-users-dumb
      [users]="users$ | async"
    ></app-list-users-dumb>
  `
})
export class ListUsersSmartComponent {
  users$: Observable<User[]> = this.route.data.pipe(map(data => data.users));

  constructor(private route: ActivatedRoute) { }
}
