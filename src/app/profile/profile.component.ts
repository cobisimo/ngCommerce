import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { User } from 'models/user';
import { UserActions } from 'store/actions';
import { AuthService } from 'auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: Observable<User>;
  uid: string;
  profileForm: FormGroup;

  constructor(private store: Store<{ user: User }>, private userStore: Store<{ user: User }>, fb: FormBuilder) {
    this.user = this.userStore.select('user');

    this.profileForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'billingAddress': [null],
      'shippingAddress': [null]
    });
  }

  ngOnInit() {
    this.user
      .subscribe(user => {
        if (user) {
          this.profileForm.patchValue(user);
          this.uid = user.uid;
        }
      });
  }

  updateProfile() {
    this.store.dispatch(new UserActions.UpdateProfile({ data: { ...this.profileForm.value }, uid: this.uid }));
  }
}
