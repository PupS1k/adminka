import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RolesResolver} from './roles/services/roles.resolver';
import {ListRolesSmartComponent} from './roles/components/list-roles/list-roles-smart.component';
import {ListUsersSmartComponent} from './users/components/list-users/list-users-smart.component';
import {UsersResolver} from './users/services/users.resolver';
import {RoleEditSmartComponent} from './roles/components/role-edit/role-edit-smart.component';
import {RoleResolver} from './roles/services/role.resolver';
import {UserEditSmartComponent} from './users/components/user-edit/user-edit-smart.component';
import {UserResolver} from './users/services/user.resolver';


const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: ListUsersSmartComponent, resolve: {users: UsersResolver}},
  {path: 'roles', component: ListRolesSmartComponent, resolve: {roles: RolesResolver}},
  {path: 'roles/edit', component: RoleEditSmartComponent},
  {path: 'roles/edit/:id', component: RoleEditSmartComponent, resolve: {role: RoleResolver}},
  {path: 'users/edit', component: UserEditSmartComponent, resolve: {roles: RolesResolver}},
  {path: 'users/edit/:id', component: UserEditSmartComponent, resolve: {roles: RolesResolver, user: UserResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
