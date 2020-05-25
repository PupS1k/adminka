import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RoleForm} from '../models/role-form.model';
import {Role} from '../models/role.model';
import {getBaseUrl} from '../../utils';


@Injectable()
export class RoleService {
  constructor(private http: HttpClient) {}

  baseUrl = getBaseUrl();

  fetchRoles() {
    return this.http.get<Role[]>(`${this.baseUrl}api/roles`);
  }

  fetchRole(id: number) {
    return this.http.get(`${this.baseUrl}api/roles/${id}`);
  }

  createRole(role: RoleForm) {
    return this.http.post(`${this.baseUrl}api/roles`, role);
  }

  updateRole(role: RoleForm, id: number) {
    return this.http.put(`${this.baseUrl}api/roles/${id}`, {...role, id});
  }

  deleteRole(id) {
    return this.http.delete(`${this.baseUrl}api/roles/${id}`);
  }
}
