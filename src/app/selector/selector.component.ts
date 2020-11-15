import { Component, OnInit } from '@angular/core';
import { DrumSelectorService } from '../drumSelector.service';
import { Drum } from '../drum-list/drum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  list$: Observable<Drum[]>;

  constructor(private selector: DrumSelectorService) { 
    this.list$ = selector.drumList.asObservable();
  }

  ngOnInit(): void {
  }

}
