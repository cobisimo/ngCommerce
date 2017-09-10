import { productReducer } from './reducers/product.reducer';
import { orderReducer } from './reducers/order.reducer';
import { ProductEffects } from './effects/product.efects';

export const reducers: any = {
  'products': productReducer,
  'order': orderReducer
};

export const effects: any[] = [
  ProductEffects
];
