import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-check-box-single',
  templateUrl: './check-box-single.component.html',
  styleUrls: ['./check-box-single.component.scss']
})
export class CheckBoxSingleComponent implements OnInit {

  @Input()
  stateCheckbox: boolean;

  @Input()
  diasable: boolean;

  @Input()
  select: boolean;

  @Output()
  selectChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }
 
  ngOnInit(): void {
  }

  selectState() : void{
    this.select = !this.select;
    this.selectChange.emit(this.select);
  }

}
