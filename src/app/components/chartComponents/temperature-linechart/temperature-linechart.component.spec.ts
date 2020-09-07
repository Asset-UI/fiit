import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureLinechartComponent } from './temperature-linechart.component';

describe('TemperatureLinechartComponent', () => {
  let component: TemperatureLinechartComponent;
  let fixture: ComponentFixture<TemperatureLinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureLinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureLinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
