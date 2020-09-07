import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodPressureLinechartComponent } from './blood-pressure-linechart.component';

describe('BloodPressureLinechartComponent', () => {
  let component: BloodPressureLinechartComponent;
  let fixture: ComponentFixture<BloodPressureLinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodPressureLinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodPressureLinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
