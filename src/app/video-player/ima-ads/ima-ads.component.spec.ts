import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImaAdsComponent } from './ima-ads.component';

describe('ImaAdsComponent', () => {
  let component: ImaAdsComponent;
  let fixture: ComponentFixture<ImaAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImaAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImaAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
