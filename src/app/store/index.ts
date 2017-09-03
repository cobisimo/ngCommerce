import { productReducer } from './reducers/product.reducer';
import { ProductEffects } from './effects/product.efects';

export const reducers: any = {
  'products': productReducer
};

export const effects: any[] = [
  ProductEffects
];
