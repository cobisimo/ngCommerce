import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './store';

import { FirebaseService } from './firebase.service';
import { AdminGuard } from './admin.guard';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:pid', component: ProductDetailsComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/:id', component: OrderDetailsComponent },
  { path: 'users', component: UserListComponent, canActivate: ['AdminGuard'] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserListComponent,
    NotFoundComponent,
    ProductListComponent,
    OrderListComponent,
    ProductDetailsComponent,
    OrderDetailsComponent,
    HomePageComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes
    ),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    NgbModule.forRoot()
  ],
  providers: [FirebaseService, AdminGuard, NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [ProductEditComponent]
})
export class AppModule { }
