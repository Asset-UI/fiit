import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiologyTableComponent } from './cardiology-table.component';

describe('CardiologyTableComponent', () => {
  let component: CardiologyTableComponent;
  let fixture: ComponentFixture<CardiologyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardiologyTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardiologyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
