import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightBarchartComponent } from './height-barchart.component';

describe('HeightBarchartComponent', () => {
  let component: HeightBarchartComponent;
  let fixture: ComponentFixture<HeightBarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightBarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
