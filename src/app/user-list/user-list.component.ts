import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { User } from 'models/user';
import { UsersActions } from 'store/actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;
  roles: string[] = [
    'USER',
    'MANAGER',
    'ADMIN'
  ];

  constructor(private usersStore: Store<{ users: User[] }>) {
    this.users = this.usersStore.select('users');
  }

  ngOnInit() {
    this.usersStore.dispatch(new UsersActions.GetUsers(null));
  }

  update(user: User) {
    this.usersStore.dispatch(new UsersActions.UpdateUser({ ...user, $key: user.$key }));
  }

  deleteUser(user: User) {
    this.usersStore.dispatch(new UsersActions.DeleteUser(user));
  }
}
