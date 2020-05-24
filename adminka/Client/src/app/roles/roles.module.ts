import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RolesRoutingModule} from './roles-routing.module';
import {ListRolesSmartComponent} from './components/list-roles/list-roles-smart.component';
import {ListRolesDumbComponent} from './components/list-roles/list-roles-dumb.component';
import {RoleSmartComponent} from './components/role/role-smart.component';
import {RoleDumbComponent} from './components/role/role-dumb.component';
import {RoleEditDumbComponent} from './components/role-edit/role-edit-dumb.component';
import {RoleEditSmartComponent} from './components/role-edit/role-edit-smart.component';
import {RoleService} from './services/role.service';
import {RoleResolver} from './services/role.resolver';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RolesRoutingModule,
  ],
  declarations: [
    ListRolesSmartComponent,
    ListRolesDumbComponent,
    RoleSmartComponent,
    RoleDumbComponent,
    RoleEditDumbComponent,
    RoleEditSmartComponent
  ],
  providers: [
    RoleService,
    RoleResolver
  ]
})
export class RolesModule {
}
