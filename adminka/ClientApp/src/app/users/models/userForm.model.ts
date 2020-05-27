export interface UserForm {
  fullName: string;
  userName: string;
  age: number;
  roles: RoleID[];
}

export interface RoleID {
  roleId: number;
}
