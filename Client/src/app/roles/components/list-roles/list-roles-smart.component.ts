import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Role} from '../../models/role.model';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-roles-smart',
  template: `
    <app-list-roles-dumb
      [roles]="roles$ | async"
    ></app-list-roles-dumb>
  `
})
export class ListRolesSmartComponent {
  roles$: Observable<Role[]> = this.route.data.pipe(map(data => data.roles));

  constructor(private route: ActivatedRoute) { }
}
