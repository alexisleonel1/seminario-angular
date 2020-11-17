import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status-boolean',
  templateUrl: './status-boolean.component.html',
  styleUrls: ['./status-boolean.component.scss']
})
export class StatusBooleanComponent implements OnInit {

  @Input()
  disable: boolean;

  @Input()
  select: boolean;

  @Input()
  state: boolean;

  @Output()
  stateChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { 
    this.select = false;
  }

  ngOnInit(): void {
  }

  private emitState() : void{
    this.stateChange.emit(this.state);
  }

  changeState():void{
    if(!this.disable && this.select)
    this.state = !this.state;
    this.emitState()
  }

}
