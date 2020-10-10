import { Component, OnInit } from '@angular/core';
import { Drum } from './drum';

@Component({
  selector: 'app-drum-list',
  templateUrl: './drum-list.component.html',
  styleUrls: ['./drum-list.component.scss']
})
export class DrumListComponent implements OnInit {

  drums: Drum[]= [
    {
      number: 1,
      code: "1247-1235675687",
      tracing: true,
      property: "persona",
      reason: "",
      season: 2019,
      sold: false,
    },
    {
      number: 2,
      code: "1247-1235675687",
      tracing: false,
      property: "persona",
      reason: "",
      season: 2019,
      sold: true,
    },
    {
      number: 3,
      code: "1247-1235675687",
      tracing: true,
      property: "persona",
      reason: "",
      season: 2019,
      sold: false,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
