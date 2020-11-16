import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-vender',
  templateUrl: './button-vender.component.html',
  styleUrls: ['./button-vender.component.scss']
})
export class ButtonVenderComponent implements OnInit {

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
