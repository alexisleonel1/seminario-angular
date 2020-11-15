import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-numbers',
  templateUrl: './input-numbers.component.html',
  styleUrls: ['./input-numbers.component.scss']
})
export class InputNumbersComponent implements OnInit {

  constructor() { }

  @Input()
  code: string;

  @Input()
  select: boolean;

  @Output()
  codeChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.emitCode();
  }

  emitCode() : void{
    this.codeChange.emit(this.code);
  }

}
