import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { State } from 'store/reducers/product.reducer';
import { ProductActions } from 'store/actions';
import { Product } from 'models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})

export class ProductEditComponent implements OnInit {
  private _product = new BehaviorSubject<Product>(null);
  @Input()
  set product(value) { this._product.next(value); }
  get product() { return this._product.getValue(); }

  productForm: FormGroup;

  constructor(private store: Store<{ products: State }>, fb: FormBuilder) {
    this.productForm = fb.group({
      'pid': [null],
      'title': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'description': [null],
      'price': [null]
    });
  }

  ngOnInit() {
    this._product
      .subscribe(product => {
        console.log(product);
        if (product) {
          this.productForm.setValue(product);
        }
      });
  }

  addProduct(text) {
    if (this.product && this.product.$key) {
      this.store.dispatch(new ProductActions.UpdateProduct({ ...this.productForm.value, $key: this.product.$key }));
    } else {
      this.store.dispatch(new ProductActions.AddProduct(this.productForm.value));
    }
    this.productForm.reset();
  }

  onCancel() {
    this.product = null;
    this.productForm.reset();
  }
}
