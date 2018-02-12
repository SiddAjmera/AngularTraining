import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.css']
})
export class BuiltInDirectivesComponent implements OnInit {

  messages: string[];
  hideMessages: boolean;
  blueGradientApplied: boolean;

  constructor() { }

  ngOnInit() {
    this.messages = [
      'Message 1',
      'Message 2',
      'Message 3',
      'Message 4',
      'Message 5'
    ];
    this.hideMessages = true;
    this.blueGradientApplied = true;
  }

}
