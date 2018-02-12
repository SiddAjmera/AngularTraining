import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

import { IUser } from './../../interfaces/user';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];
  subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    // this.users = this.activatedRoute.snapshot.data['users'];
    // this.users = this.userService.getUsers();
    this.subscription = this.userService.getUsersViaREST().subscribe(users => {
      this.users = users;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
