import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {getRoleForm} from '../../../utils';
import {Role} from '../../models/role.model';
import {RoleService} from '../../services/role.service';
import {RoleForm} from '../../models/role-form.model';

@Component({
  selector: 'app-role-edit-smart',
  template: `
    <app-role-edit-dumb
      [roleForm]="roleForm"
      (edit)="onSubmit($event)"
    ></app-role-edit-dumb>
  `
})
export class RoleEditSmartComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  isUpdate = false;
  roleId: number;
  roleForm = getRoleForm('', '');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roleService: RoleService
  ) {
  }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe(data => {
      if (data.role) {
        const role: Role = data.role[0];
        this.isUpdate = true;
        this.roleId = role.id;
        this.roleForm = getRoleForm(role.name, role.access);
      }
    });
  }

  onSubmit(role: RoleForm) {
    if (this.isUpdate) {
      this.roleService.updateRole(role, this.roleId).subscribe(() => this.router.navigate(['/roles']));
    } else {
      this.roleService.createRole(role).subscribe(() => this.router.navigate(['/roles']));
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
