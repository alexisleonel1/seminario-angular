import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-strings',
  templateUrl: './input-strings.component.html',
  styleUrls: ['./input-strings.component.scss']
})
export class InputStringsComponent implements OnInit {

  constructor() { }

  @Input()
  strings: string;

  @Input()
  select: boolean;

  @Output()
  stringsChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.emitStrings();
  }
  emitStrings() : void{
    this.stringsChange.emit(this.strings);
  }
}
