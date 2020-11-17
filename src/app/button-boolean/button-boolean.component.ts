import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-boolean',
  templateUrl: './button-boolean.component.html',
  styleUrls: ['./button-boolean.component.scss']
})
export class ButtonBooleanComponent implements OnInit {

  @Input()
  state: boolean;

  @Output()
  stateChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  var: boolean;

  @Output()
  varChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void { }

  emitState(): void{
    this.stateChange.emit(false);
    this.varChange.emit(true);
  }
}
