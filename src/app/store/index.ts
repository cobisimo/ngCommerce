import { productReducer } from './reducers/product.reducer';
import { orderReducer } from './reducers/order.reducer';
import { userReducer } from 'store/reducers/user.reducer';
import { ProductEffects } from './effects/product.efects';
import { OrderEffects } from './effects/order.efects';
import { UserEffects } from './effects/user.efects';

export const reducers: any = {
  'products': productReducer,
  'order': orderReducer,
  'user': userReducer
};

export const effects: any[] = [
  ProductEffects,
  OrderEffects,
  UserEffects
];
