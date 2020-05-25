import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserForm} from '../models/userForm.model';
import {getBaseUrl} from '../../utils';


@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  baseUrl = getBaseUrl();

  fetchUsers() {
    console.log(this.baseUrl);
    return this.http.get(`${this.baseUrl}api/users`);
  }

  fetchUser(id: number) {
    return this.http.get(`${this.baseUrl}api/users/${id}`);
  }

  createUser(user) {
    return this.http.post(`${this.baseUrl}api/users`, user);
  }

  updateUser(user: UserForm, id: number) {
    return this.http.put(`${this.baseUrl}api/users/${id}`, {...user, id});
  }

  deleteUser(id) {
    return this.http.delete(`${this.baseUrl}/api/users/${id}`);
  }
}
