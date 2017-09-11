export enum Role {
  USER,
  MANAGER,
  ADMIN
}

export interface User {
  uid: string;
  name: string;
  email: string;
  billingAddress: string;
  shippingAddress: string;
  role: string;
}
