import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCuePointsComponent } from './ad-cue-points.component';

describe('AdCuePointsComponent', () => {
  let component: AdCuePointsComponent;
  let fixture: ComponentFixture<AdCuePointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdCuePointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCuePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
