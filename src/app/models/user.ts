export enum Role {
  USER,
  MANAGER,
  ADMIN
}

export interface User {
  $key?: string;
  uid?: string;
  name: string;
  email: string;
  billingAddress?: string;
  shippingAddress?: string;
  role: string;
}
