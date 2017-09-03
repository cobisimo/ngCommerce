import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Product } from '../models/product';

import * as reducer from '../reducers/data';
import * as Actions from '../actions/data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private store: Store<reducer.State>) {
    this.products = this.store.select(state => {
      return state.products;
    });
  }

  ngOnInit() {
    /*this.store.dispatch(new Actions.AddProduct({
      pid: '001',
      title: 'test',
      description: 'desc',
      price: 100
    }));*/
    this.store.dispatch(new Actions.FetchProducts({}));
  }
}
