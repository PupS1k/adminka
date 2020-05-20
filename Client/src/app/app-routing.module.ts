import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RolesResolver} from './roles/services/roles.resolver';
import {ListRolesSmartComponent} from './roles/components/list-roles/list-roles-smart.component';


const routes: Routes = [
  {path: '', redirectTo: 'roles', pathMatch: 'full'},
  {path: 'roles', component: ListRolesSmartComponent, resolve: {roles: RolesResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
