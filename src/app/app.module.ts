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
import { AuthService } from 'auth.service';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { BasketComponent } from './basket/basket.component';
import { ProfileComponent } from './profile/profile.component';
import { UserGuard } from 'user.guard';
import { ManagerGuard } from 'manager.guard';
import { AdminGuard } from 'admin.guard';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:pid', component: ProductDetailsComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/:id', component: OrderDetailsComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'users', component: UserListComponent, canActivate: [AdminGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [UserGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    NotFoundComponent,
    ProductListComponent,
    OrderListComponent,
    ProductDetailsComponent,
    OrderDetailsComponent,
    HomePageComponent,
    ProductEditComponent,
    BasketComponent,
    ProfileComponent
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
  providers: [FirebaseService, AuthService, AdminGuard, NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [ProductEditComponent]
})
export class AppModule { }
