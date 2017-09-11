import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';

import { Product } from 'models/product';

import { ProductActions, OrderActions } from 'store/actions';
import { ProductEditComponent } from 'product-edit/product-edit.component';
import { Order } from 'models/order';
import { User } from 'models/user';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;
  order: Observable<Order>;
  user: Observable<User>;
  product: Product = null;

  constructor(
    private productsStore: Store<{ products: Product[] }>,
    private orderStore: Store<{ order: Order }>,
    private userStore: Store<{ user: User }>,
    private modalService: NgbModal
  ) {
    this.products = this.productsStore.select('products');
    this.order = this.orderStore.select('order');
    this.user = this.userStore.select('user');
  }

  ngOnInit() {
    this.productsStore.dispatch(new ProductActions.GetProducts(null));
    this.orderStore.dispatch(new OrderActions.GetOrder(null));
  }

  selectProduct(product: Product) {
    const modalRef = this.modalService.open(ProductEditComponent);
    modalRef.componentInstance.product = product;
  }

  deleteProduct(product: Product) {
    this.productsStore.dispatch(new ProductActions.DeleteProduct(product));
  }

  buyProduct(product: Product) {
    // this.store.dispatch(new OrderActions.AddOrder(product));
    this.orderStore.dispatch(new OrderActions.AddProduct(product));
  }
}
