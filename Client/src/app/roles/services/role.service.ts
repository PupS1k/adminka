import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RoleForm} from '../models/role-form.model';
import {Role} from '../models/role.model';


@Injectable()
export class RoleService {
  constructor(private http: HttpClient) {}

  fetchRoles() {
    return this.http.get<Role[]>('https://localhost:44388/api/roles');
  }

  fetchRole(id: number) {
    return this.http.get(`https://localhost:44388/api/roles/${id}`);
  }

  createRole(role: RoleForm) {
    return this.http.post(`https://localhost:44388/api/roles`, role);
  }

  updateRole(role: RoleForm, id: number) {
    return this.http.put(`https://localhost:44388/api/roles/${id}`, role);
  }

  deleteRole(id) {
    return this.http.delete(`https://localhost:44388/api/roles/${id}`);
  }
}
