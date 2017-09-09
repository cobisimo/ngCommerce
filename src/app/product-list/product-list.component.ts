import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';

import { Product } from 'models/product';

import { State } from 'store/reducers/product.reducer';
import { ProductActions } from 'store/actions';
import { ProductEditComponent } from 'product-edit/product-edit.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;
  product: Product = null;

  constructor(private store: Store<{ products: State }>, private modalService: NgbModal) {
    this.products = this.store.select(state => {
      return state.products.data;
    });
    /*this.products = this.store.select('products');*/
  }

  ngOnInit() {
    this.store.dispatch(new ProductActions.GetProducts({}));
  }

  selectProduct(product: Product) {
    const modalRef = this.modalService.open(ProductEditComponent);
    modalRef.componentInstance.product = product;
  }

  deleteProduct(product: Product) {
    this.store.dispatch(new ProductActions.DeleteProduct(product));
  }

  buyProduct(product: Product) {
    this.store.dispatch(new ProductActions.BuyProduct(product));
  }
}
