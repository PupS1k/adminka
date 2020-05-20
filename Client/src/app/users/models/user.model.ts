import {Role} from '../../roles/models/role.model';

export interface User {
  id: number;
  fullName: string;
  userName: string;
  age: number;
  role: Role;
}
