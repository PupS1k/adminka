import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListRolesSmartComponent} from './roles/components/list-roles/list-roles-smart.component';
import {RoleSmartComponent} from './roles/components/role/role-smart.component';
import {RoleDumbComponent} from './roles/components/role/role-dumb.component';
import {ListRolesDumbComponent} from './roles/components/list-roles/list-roles-dumb.component';
import {RoleService} from './roles/services/role.service';
import {RolesResolver} from './roles/services/roles.resolver';
import {RoleResolver} from './roles/services/role.resolver';
import {SpinnerComponent} from './layer/spinner/components/spinner.component';
import {SpinnerService} from './layer/spinner/services/spinner.service';
import {ReqInterceptor} from './core/http.interceptor';
import {ListUsersSmartComponent} from './users/components/list-users/list-users-smart.component';
import {ListUsersDumbComponent} from './users/components/list-users/list-users-dumb.component';
import {UserSmartComponent} from './users/components/user/user-smart.component';
import {UserDumbComponent} from './users/components/user/user-dumb.component';
import {UserService} from './users/services/user.service';
import {UserResolver} from './users/services/user.resolver';
import {UsersResolver} from './users/services/users.resolver';
import { RoleEditDumbComponent } from './roles/components/role-edit/role-edit-dumb.component';
import {RoleEditSmartComponent} from './roles/components/role-edit/role-edit-smart.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserEditDumbComponent} from './users/components/user-edit/user-edit-dumb.component';
import {UserEditSmartComponent} from './users/components/user-edit/user-edit-smart.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRolesSmartComponent,
    ListRolesDumbComponent,
    RoleSmartComponent,
    RoleDumbComponent,
    ListUsersSmartComponent,
    ListUsersDumbComponent,
    UserSmartComponent,
    UserDumbComponent,
    SpinnerComponent,
    RoleEditDumbComponent,
    RoleEditSmartComponent,
    UserEditDumbComponent,
    UserEditSmartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    RoleService,
    RolesResolver,
    RoleResolver,
    UserService,
    UserResolver,
    UsersResolver,
    SpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReqInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
