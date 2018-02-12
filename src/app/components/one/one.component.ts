import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  prop: string;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.propChanged.subscribe(
      prop => this.prop = prop,
      err => console.log('Got the error'),
      () => alert('Subscription got completed!')
    );
  }

  changeProp() {
    this.userService.setProp('bar');
  }

}
