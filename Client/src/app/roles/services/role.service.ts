import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class RoleService {
  constructor(private http: HttpClient) {}

  fetchRoles() {
    return this.http.get('https://localhost:44388/api/roles');
  }

  fetchRole(id: number) {
    return this.http.get(`https://localhost:44388/api/roles/${id}`);
  }


}
