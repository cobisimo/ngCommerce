import {User} from './user';
import {Product} from './product';

export interface Order {
  oid: string;
  user: User;
  products: Product[];
  status: string;
  note: string;
  sum: number;
}
