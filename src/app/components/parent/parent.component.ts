import { Laptop } from './../../classes/laptop';
import { UserService } from './../../services/user/user.service';
import { IUser } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';

import { HookLogger } from '../../decorators/class.decorator';
import { Readonly } from '../../decorators/property.decorator';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  dateOfBirth: Date = new Date();
  users: IUser[];
  userIdType: string = '';
  
  @Readonly('This is a readonly field') readonlyProp: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();

    let laptop: Laptop = new Laptop();
    // console.log(laptop['stickers']);

    console.log(this.readonlyProp);
    this.readonlyProp = 'This was changed!';
    console.log(this.readonlyProp);

  }

  addUser() {
    this.userService.addUser({
      id: this.users.length + 1,
      name: 'Sam Kolder',
      email: 'sam.kolder@domain.com'
    });
  }

}
