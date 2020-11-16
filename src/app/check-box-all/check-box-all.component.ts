import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-check-box-all',
  templateUrl: './check-box-all.component.html',
  styleUrls: ['./check-box-all.component.scss']
})
export class CheckBoxAllComponent implements OnInit {

  @Output()
  stateChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  selectAll(e) : void{
    let state=e.target.checked;
    this.stateChange.emit(state);
  }

}
