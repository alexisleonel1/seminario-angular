import { Component, OnInit } from '@angular/core';
import { Drum } from './drum';

@Component({
  selector: 'app-drum-list',
  templateUrl: './drum-list.component.html',
  styleUrls: ['./drum-list.component.scss']
})
export class DrumListComponent implements OnInit {

  stateCheckbox: boolean;
  drumsTotal: number;
  drumsDisp:number;

  drums: Drum[]= [
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

  constructor() {
    this.stateCheckbox = false;
    this.drumsTotal = this.drums.length;
    this.drumsDisp = 0;
  }

  ngOnInit(): void {
    this.drumsDisp = this.drumsDisp1();
  }

  tracingState(drum){
    if(!drum.sold && drum.select)
    drum.tracing = !drum.tracing;
  }

  selectState(drum){
    drum.select = !drum.select;
  }

  selectAll(e){
    this.stateCheckbox=e.target.checked;
    this.drums.forEach(drum => {
      if(!drum.sold)
      drum.select = e.target.checked;
    });
  }

  drumsDisp1() : number{
    this.drums.forEach(drum => {
      if(!drum.sold)
      this.drumsDisp++;
  });
  return this.drumsDisp;
  }
}

