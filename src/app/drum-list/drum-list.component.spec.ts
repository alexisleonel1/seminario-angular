import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumListComponent } from './drum-list.component';

describe('DrumListComponent', () => {
  let component: DrumListComponent;
  let fixture: ComponentFixture<DrumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrumListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
