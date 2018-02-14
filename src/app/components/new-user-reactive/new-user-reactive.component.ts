import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { CustomValidator } from '../../classes/custom.validator';

@Component({
  selector: 'app-new-user-reactive',
  templateUrl: './new-user-reactive.component.html',
  styleUrls: ['./new-user-reactive.component.css']
})
export class NewUserReactiveComponent implements OnInit {

  userForm: FormGroup;
  get name() {
    return this.userForm.get('name');
  }

  get username() {
    return this.userForm.get('username');
  }

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('Leanne Graham', [
        Validators.required, 
        Validators.maxLength(20), 
        Validators.minLength(8),
        Validators.pattern('John Doe')
      ]),
      username: new FormControl('Bret', null, CustomValidator.asyncUnique),
      email: new FormControl('Sincere@april.biz'),
      address: new FormGroup({
        street: new FormControl('Kulas Light'),
        suite: new FormControl('Apt. 556'),
        city: new FormControl('Gwenborough'),
        zipcode: new FormControl('92998-3874'),
        geo: new FormGroup({
          lat: new FormControl('-37.3159'),
          lng: new FormControl('81.1496')
        })
      }),
      phone: new FormControl('1-770-736-8031 x56442'),
      website: new FormControl('hildegard.org'),
      company: new FormGroup({
        name: new FormControl('Romaguera-Crona'),
        catchPhrase: new FormControl('Multi-layered client-server neural-net'),
        bs: new FormControl('harness real-time e-markets')
      }),
      hobbies: new FormArray([])
    });
  }

  addHobbies() {
    (<FormArray>this.userForm.get('hobbies')).push(new FormControl(''));
  }

  deleteHobby(index) {
    (<FormArray>this.userForm.get('hobbies')).removeAt(index);
  }

  submit() {
    console.log(this.userForm);
  }

}
