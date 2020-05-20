import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {RoleService} from './role.service';

@Injectable()
export class RolesResolver implements Resolve<Observable<any>> {
  constructor(private roleService: RoleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return this.roleService.fetchRoles();
  }
}
