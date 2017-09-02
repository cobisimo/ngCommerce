export enum Role {
  USER,
  MANAGER,
  ADMIN
}

export interface User {
  uid: string;
  username: string;
  role: Role;
}
