import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacingCardComponent } from './racing-card.component';

describe('RacingCardComponent', () => {
  let component: RacingCardComponent;
  let fixture: ComponentFixture<RacingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
