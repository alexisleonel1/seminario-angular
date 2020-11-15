import { Injectable } from '@angular/core';
import { Drum } from './drum-list/drum';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrumSelectorService {

  private _drumList: Drum[] = [];
  drumList: BehaviorSubject<Drum[]> = new BehaviorSubject([]);

  constructor() { }

  
  select(e): void{
    this._drumList.forEach(drum => {
      if(!drum.sold)
      drum.select = e.target.checked;
    });
  }

  disp() : number{
    let d = 0;
    this._drumList.forEach(drum => {
      if(!drum.sold)
      d++;
  });
  return d;
  }

  addSeleccion(drum) : void {
    let item: Drum = this._drumList.find((v) => v.number == drum.number);
    if(!item) {
      this._drumList.push({ ... drum});
    } 
    this.drumList.next(this._drumList)
  }
}
