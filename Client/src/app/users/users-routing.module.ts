import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UserEditSmartComponent} from './components/user-edit/user-edit-smart.component';
import {ListUsersSmartComponent} from './components/list-users/list-users-smart.component';
import {UsersResolver} from './services/users.resolver';
import {RolesResolver} from '../roles/services/roles.resolver';
import {UserResolver} from './services/user.resolver';


const usersRoutes: Routes = [
  {path: '', component: ListUsersSmartComponent, resolve: {users: UsersResolver}},
  {path: 'edit', component: UserEditSmartComponent, resolve: {roles: RolesResolver}},
  {path: 'edit/:id', component: UserEditSmartComponent, resolve: {roles: RolesResolver, user: UserResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})

export class UsersRoutingModule {
}
