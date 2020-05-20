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

@NgModule({
  declarations: [
    AppComponent,
    ListRolesSmartComponent,
    ListRolesDumbComponent,
    RoleSmartComponent,
    RoleDumbComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RoleService,
    RolesResolver,
    RoleResolver,
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
