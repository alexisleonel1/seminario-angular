import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-boolean',
  templateUrl: './button-boolean.component.html',
  styleUrls: ['./button-boolean.component.scss']
})
export class ButtonBooleanComponent implements OnInit {

  @Input()
  sold: boolean;

  @Input()
  select: boolean;

  @Output()
  soldChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  selectChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {

  }

  emitSold(): void{
    this.selectChange.emit(false);
    this.soldChange.emit(true);
  }
}
