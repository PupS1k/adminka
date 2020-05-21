import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RoleForm} from '../../roles/models/role-form.model';
import {Role} from '../../roles/models/role.model';
import {UserForm} from '../models/userForm.model';
import {User} from '../models/user.model';


@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  fetchUsers() {
    return this.http.get('https://localhost:44388/api/users');
  }

  fetchUser(id: number) {
    return this.http.get(`https://localhost:44388/api/users/${id}`);
  }

  createUser(user: UserForm) {
    return this.http.post(`https://localhost:44388/api/users`, user);
  }

  updateUser(user: UserForm, id: number) {
    return this.http.put(`https://localhost:44388/api/users/${id}`, user);
  }

  deleteUser(id) {
    return this.http.delete(`https://localhost:44388/api/users/${id}`);
  }
}
