import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status-boolean',
  templateUrl: './status-boolean.component.html',
  styleUrls: ['./status-boolean.component.scss']
})
export class StatusBooleanComponent implements OnInit {

  constructor() { }

  @Input()
  status: boolean;

  @Input()
  select: boolean;

  @Input()
  sold: boolean;

  @Output()
  statusChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.emitStatus();
  }

  emitStatus() : void{
    this.statusChange.emit(this.status);
  }

  state():void{
      if(!this.sold && this.select)
      this.status = !this.status;
  }

}
