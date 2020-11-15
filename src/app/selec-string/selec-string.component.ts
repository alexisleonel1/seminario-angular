import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selec-string',
  templateUrl: './selec-string.component.html',
  styleUrls: ['./selec-string.component.scss']
})
export class SelecStringComponent implements OnInit {

  constructor() { }

  @Input()
  name : string;

  @Input()
  select: boolean;

  @Output()
  nameChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  emitName() : void{
    this.nameChange.emit(this.name);
  }

}
