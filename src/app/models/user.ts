export enum Role {
  USER,
  MANAGER,
  ADMIN
}

export interface User {
  uid: string;
  billingAddress: string;
  shippingAddress: string;
  role: Role;
}
