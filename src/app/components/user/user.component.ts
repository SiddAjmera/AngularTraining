import { IUser } from './../../interfaces/user';
import { Component, OnInit, Input } from '@angular/core';

import { HookLogger } from '../../decorators/class.decorator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
@HookLogger({
  hooks: [
    'ngAfterContentInit',
    'ngAfterViewChecked',
  ]
})
export class UserComponent implements OnInit {

  @Input() user: IUser;

  constructor() { }

  ngOnInit() {
  }

}
