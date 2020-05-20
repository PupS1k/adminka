import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {map, takeUntil} from 'rxjs/operators';

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
  roleId: number;
  roleForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    access: new FormControl('', [Validators.required])
  });

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.data.pipe(
      map(data => data.role),
      takeUntil(this.destroy$)
    ).subscribe(role => {
      if (role) {
        this.roleId = role.id;
        this.roleForm = new FormGroup({
          name: new FormControl(role.name, [Validators.required]),
          access: new FormControl(role.access, [Validators.required])
        });
      }
    });
  }

  onSubmit(role) {
    console.log(role);
    console.log(this.roleId);
    this.router.navigate(['/roles']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
