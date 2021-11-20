import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrPlayerComponent } from './vr-player.component';

describe('VrPlayerComponent', () => {
  let component: VrPlayerComponent;
  let fixture: ComponentFixture<VrPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VrPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VrPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
