import { 
  Component, 
  OnInit, 
  Input, 
  EventEmitter, 
  Output,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements 
  OnChanges, 
  OnInit, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy {

  @Input() message: string;
  @Input() index: number;

  @Output() deleted: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    console.log(`Message: constructor.`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`Message: ngOnChanges.`);
    for(let prop in changes) {
      console.log(`Prop Name: ${prop}. Prev Value: ${changes[prop].previousValue}. Current Value: ${changes[prop].currentValue}`);
    }
  }

  ngOnInit() {
    console.log(`Message: ngOnInit.`);
  }

  ngDoCheck() {
    console.log(`Message: ngDoCheck.`);
  }

  ngAfterContentInit() {
    console.log(`Message: ngAfterContentInit.`);
  }

  ngAfterContentChecked() {
    console.log(`Message: ngAfterContentChecked.`);
  }

  ngAfterViewInit() {
    console.log(`Message: ngAfterViewInit.`);
  }

  ngAfterViewChecked() {
    console.log(`Message: ngAfterViewChecked.`);
  }

  ngOnDestroy() {
    console.log(`Message: ngOnDestroy.`);
  }

  onDelete() {
    this.deleted.emit(this.index);
  }

}
