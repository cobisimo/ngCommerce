import { Action } from '@ngrx/store';
import { Product } from 'models/product';
import { Order, OrderItem } from 'models/order';
import { ProductActions, OrderActions } from 'store/actions';
import { merge, without, clone, find } from 'lodash';

// Define initial state
const initialState: Order = {
  uid: null,
  items: [],
  status: 'init',
  note: '',
  sum: 0
};

// reducer function
export function orderReducer(state = initialState, action: OrderActions.Actions): Order {
  const newState = { ...state };
  // Deep clone hack
  newState.items = [ ...newState.items ];
  const product = action.payload as Product;
  const index = product ? newState.items.findIndex((t) => t.product.pid === product.pid) : -1;
  switch (action.type) {
    case OrderActions.ActionTypes.ADD_PRODUCT:
      if (index >= 0) {
        newState.items[index].quantity++;
      } else {
        newState.items.push({
          product: product,
          quantity: 1
        });
      }
      newState.sum = newState.items.reduce((sum: number, item: OrderItem) => {
        return sum + item.product.price * item.quantity;
      }, 0);
      return newState;
    case OrderActions.ActionTypes.REMOVE_PRODUCT:
      if (index >= 0) {
        if (newState.items[index].quantity > 1) {
          newState.items[index].quantity--;
        } else {
          newState.items.splice(index, 1);
        }
      }
      newState.sum = newState.items.reduce((sum: number, item: OrderItem) => {
        return sum + item.product.price * item.quantity;
      }, 0);
      return newState;
    case OrderActions.ActionTypes.ADD_ORDER_SUCCESS:
      alert('Order sent successfully!');
      return { ...initialState };
    default:
      return { ...state };
  }
}
