import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseHeartRateLinechartComponent } from './pulse-heart-rate-linechart.component';

describe('PulseHeartRateLinechartComponent', () => {
  let component: PulseHeartRateLinechartComponent;
  let fixture: ComponentFixture<PulseHeartRateLinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulseHeartRateLinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulseHeartRateLinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
