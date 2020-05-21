import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserForm} from '../models/userForm.model';


@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  fetchUsers() {
    return this.http.get('https://localhost:44388/api/users');
  }

  fetchUser(id: number) {
    return this.http.get(`https://localhost:44388/api/users/${id}`);
  }

  createUser(user) {
    return this.http.post(`https://localhost:44388/api/users`, user);
  }

  updateUser(user: UserForm, id: number) {
    return this.http.put(`https://localhost:44388/api/users/${id}`, {...user, id});
  }

  deleteUser(id) {
    return this.http.delete(`https://localhost:44388/api/users/${id}`);
  }
}
