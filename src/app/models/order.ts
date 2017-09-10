import {User} from './user';
import {Product} from './product';

export interface OrderItem {
  product: Product;
  quantity: number;
}

export interface Order {
  uid: string;
  items: OrderItem[];
  status: string;
  note: string;
  sum: number;
}
