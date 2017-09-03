import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Product } from 'models/product';

import { State } from 'store/reducers/product.reducer';
import { ProductActions } from 'store/actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private store: Store<{ products: State }>) {
    this.products = this.store.select(state => {
      return state.products.data;
    });
    /*this.products = this.store.select('products');*/
  }

  ngOnInit() {
    this.store.dispatch(new ProductActions.GetProducts({}));
  }

  addProduct() {
    this.store.dispatch(new ProductActions.AddProduct({
      pid: '001',
      title: 'test',
      description: 'desc',
      price: 100
    }));
  }
}
