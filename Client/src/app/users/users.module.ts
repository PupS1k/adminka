import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {UsersRoutingModule} from './users-routing.module';
import {ListUsersSmartComponent} from './components/list-users/list-users-smart.component';
import {ListUsersDumbComponent} from './components/list-users/list-users-dumb.component';
import {UserSmartComponent} from './components/user/user-smart.component';
import {UserDumbComponent} from './components/user/user-dumb.component';
import {UserEditDumbComponent} from './components/user-edit/user-edit-dumb.component';
import {UserEditSmartComponent} from './components/user-edit/user-edit-smart.component';
import {UserService} from './services/user.service';
import {UserResolver} from './services/user.resolver';
import {UsersResolver} from './services/users.resolver';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
  ],
  declarations: [
    ListUsersSmartComponent,
    ListUsersDumbComponent,
    UserSmartComponent,
    UserDumbComponent,
    UserEditDumbComponent,
    UserEditSmartComponent
  ],
  providers: [
    UserService,
    UserResolver,
    UsersResolver
  ]
})
export class UsersModule {
}
