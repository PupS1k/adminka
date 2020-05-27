import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {UserForm} from '../../models/userForm.model';
import {Role} from '../../../roles/models/role.model';
import {getUserForm} from '../../utils';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-edit-smart',
  template: `
    <app-user-edit-dumb
      [userForm]="userForm"
      [roles]="roles"
      [isUpdate]="isUpdate"
      (edit)="onSubmit($event)"
    ></app-user-edit-dumb>
  `
})
export class UserEditSmartComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  isUpdate = false;
  roles: Role[] = [];
  userId: number;
  userForm = getUserForm('', '', 0, []);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.roles = data.role;

        if (data.user) {
          const user: User = data.user[0];
          this.isUpdate = true;
          this.userId = user.id;
          this.userForm = getUserForm(user.fullName, user.userName, user.age, []);
        }
      });
  }

  onSubmit(user: UserForm) {
    if (this.isUpdate) {
      this.userService.updateUser(user, this.userId).subscribe(() => this.router.navigate(['/users']));
    } else {
      this.userService.createUser(user).subscribe(() => this.router.navigate(['/users']));
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
