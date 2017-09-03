import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'models/product';
import { Observable } from 'rxjs/Observable';
import { ProductActions } from 'store/actions';
import { FirebaseService } from 'firebase.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: Observable<Product>;
  private sub: any;

  constructor(private route: ActivatedRoute, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.product = this.firebaseService.getProduct(params['pid']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
