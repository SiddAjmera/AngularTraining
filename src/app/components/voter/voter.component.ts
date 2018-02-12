import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent {
  @Input() currentVote: number = 0;
  @Output() voteChanged: EventEmitter<number> = new EventEmitter<number>();

  upVote() {
    this.currentVote++;
    this.voteChanged.emit(this.currentVote);
    // console.log(`The value was incremnted to ${this.currentVote}`);
  }

  downVote() {
    this.currentVote--;
    this.voteChanged.emit(this.currentVote);
    // console.log(`The value was decremented to ${this.currentVote}`);
  }
}
