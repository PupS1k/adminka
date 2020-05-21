import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {UserForm} from '../../models/userForm.model';
import {Role} from '../../../roles/models/role.model';

@Component({
  selector: 'app-user-edit-smart',
  template: `
    <app-user-edit-dumb
      [userForm]="userForm"
      [roles]="roles"
      (edit)="onSubmit($event)"
    ></app-user-edit-dumb>
  `
})
export class UserEditSmartComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  roles: Role[];
  userId: number;
  userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.roles = data.roles;
        this.userForm = new FormGroup({
          fullName: new FormControl('', [Validators.required]),
          userName: new FormControl('', [Validators.required]),
          age: new FormControl(0, [Validators.required]),
          role: new FormControl(data.roles, [Validators.required])
        });

        if (data.user) {
          this.userId = data.user.id;
          this.userForm = new FormGroup({
            fullName: new FormControl(data.user.fullName, [Validators.required]),
            userName: new FormControl(data.user.userName, [Validators.required]),
            age: new FormControl(data.user.age, [Validators.required]),
            role: new FormControl(data.roles, [Validators.required])
          });
        }
      });
  }

  onSubmit(user: UserForm) {
    console.log(user);
    console.log(this.userId);
    this.router.navigate(['/users']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
