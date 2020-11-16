import { Component, OnInit } from '@angular/core';
import { Drum } from './drum';
import { DrumSelectorService } from '../drumSelector.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drum-list',
  templateUrl: './drum-list.component.html',
  styleUrls: ['./drum-list.component.scss']
})
export class DrumListComponent implements OnInit {

  drums: Drum[] = [
    {
      number: 1,
      code: "1247-1235675687",
      tracing: true,
      property: "persona",
      reason: "",
      season: 2020,
      sold: true,
      select:false,
    },
    {
      number: 2,
      code: "1247-4565675687",
      tracing: false,
      property: "persona",
      reason: "",
      season: 2020,
      sold: true,
      select:false,
    },
    {
      number: 3,
      code: "1247-5535679987",
      tracing: true,
      property: "persona",
      reason: "ninguna",
      season: 2020,
      sold: false,
      select:false,
    },
    {
      number: 4,
      code: "1247-1235565687",
      tracing: true,
      property: "persona",
      reason: "",
      season: 2020,
      sold: false,
      select:false,
    },
    {
      number: 5,
      code: "1247-1235565687",
      tracing: true,
      property: "persona",
      reason: "",
      season: 2020,
      sold: false,
      select:false,
    },
    {
      number: 6,
      code: "1247-1235565687",
      tracing: false,
      property: "persona",
      reason: "",
      season: 2020,
      sold: false,
      select:false,
    },
    {
      number: 7,
      code: "1247-1235565687",
      tracing: true,
      property: "persona",
      reason: "",
      season: 2020,
      sold: true,
      select:false,
    },
    {
      number: 8,
      code: "1247-1235565687",
      tracing: false,
      property: "persona",
      reason: "",
      season: 2020,
      sold: false,
      select:false,
    },
  ];

  list$: Observable<Drum[]>;
  drumsTotal: number;
  drumsDisp:number;
  stateCheckbox: boolean;

  constructor(private selector: DrumSelectorService){
    this.list$ = selector.drumList.asObservable();
    this.stateCheckbox = null;
    this.drumsTotal = this.drums.length;
    this.drumsDisp = 0;
  } 

  ngOnInit(): void {
    this.addSeleccion();
    this.drumsDisp = this.drumsDisp1();
  }

  drumsDisp1() : number{
    return this.selector.disp();
  }

  addSeleccion():void{
    this.drums.forEach(d => {
      this.selector.addSeleccion(d);
    });
  }

  stateChange(e: boolean): void{
    this.selector.select(e);
    this.stateCheckbox = e;
  }
}

