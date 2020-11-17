import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {

  @Input()
  diasable: boolean;

  @Input()
  state: boolean;

  @Output()
  stateChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  selectState(e) : void{
    this.state =e.target.checked;
    this.stateChange.emit(this.state);
  }

}
