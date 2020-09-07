import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMassLinechartComponent } from './body-mass-linechart.component';

describe('BodyMassLinechartComponent', () => {
  let component: BodyMassLinechartComponent;
  let fixture: ComponentFixture<BodyMassLinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyMassLinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyMassLinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
