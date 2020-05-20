import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListRolesSmartComponent} from './roles/components/list-roles/list-roles-smart.component';
import {RoleSmartComponent} from './roles/components/role/role-smart.component';
import {RoleDumbComponent} from './roles/components/role/role-dumb.component';
import {ListRolesDumbComponent} from './roles/components/list-roles/list-roles-dumb.component';
import {HttpClientModule} from '@angular/common/http';
import {RoleService} from './roles/services/role.service';
import {RolesResolver} from './roles/services/roles.resolver';
import {RoleResolver} from './roles/services/role.resolver';

@NgModule({
  declarations: [
    AppComponent,
    ListRolesSmartComponent,
    ListRolesDumbComponent,
    RoleSmartComponent,
    RoleDumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RoleService, RolesResolver, RoleResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
