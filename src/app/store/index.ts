import { productReducer } from './reducers/product.reducer';
import { orderReducer } from './reducers/order.reducer';
import { userReducer } from 'store/reducers/user.reducer';
import { usersReducer } from 'store/reducers/users.reducer';
import { ProductEffects } from './effects/product.efects';
import { OrderEffects } from './effects/order.efects';
import { UserEffects } from './effects/user.efects';
import { UsersEffects } from 'store/effects/users.efects';

export const reducers: any = {
  'products': productReducer,
  'order': orderReducer,
  'users': usersReducer,
  'user': userReducer
};

export const effects: any[] = [
  ProductEffects,
  OrderEffects,
  UsersEffects,
  UserEffects
];
