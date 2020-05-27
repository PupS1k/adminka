import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ListRolesSmartComponent} from './components/list-roles/list-roles-smart.component';
import {RoleEditSmartComponent} from './components/role-edit/role-edit-smart.component';
import {RolesResolver} from './services/roles.resolver';
import {RoleResolver} from './services/role.resolver';


const rolesRoutes: Routes = [
  {path: '', component: ListRolesSmartComponent, resolve: {role: RolesResolver}},
  {path: 'edit', component: RoleEditSmartComponent},
  {path: 'edit/:id', component: RoleEditSmartComponent, resolve: {role: RoleResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(rolesRoutes)],
  exports: [RouterModule]
})

export class RolesRoutingModule {
}
