import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'auth.service';
import { Order } from 'models/order';
import { User } from 'models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: Observable<User>;
  order: Observable<Order>;

  constructor(public authService: AuthService, private orderStore: Store<{ order: Order }>, private userStore: Store<{ user: User }>) {
    this.order = this.orderStore.select('order');
    this.user = this.userStore.select('user');
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
