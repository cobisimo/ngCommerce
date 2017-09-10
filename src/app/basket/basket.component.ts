import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Order } from 'models/order';
import { Product } from 'models/product';
import { OrderActions } from 'store/actions';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  order: Observable<Order>;

  constructor(private orderStore: Store<{ order: Order }>) {
    this.order = this.orderStore.select('order');
  }

  ngOnInit() {
  }

  add(product: Product) {
    this.orderStore.dispatch(new OrderActions.AddProduct(product));
  }

  remove(product: Product) {
    this.orderStore.dispatch(new OrderActions.RemoveProduct(product));
  }

  finishOrder(order: Order) {
    this.orderStore.dispatch(new OrderActions.AddOrder(order));
  }
}
