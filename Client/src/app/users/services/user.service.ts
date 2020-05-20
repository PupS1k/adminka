import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  fetchUsers() {
    return this.http.get('https://localhost:44388/api/users');
  }

  fetchUser(id: number) {
    return this.http.get(`https://localhost:44388/api/users/${id}`);
  }


}
