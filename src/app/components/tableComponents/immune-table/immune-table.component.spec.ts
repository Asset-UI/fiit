import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmuneTableComponent } from './immune-table.component';

describe('ImmuneTableComponent', () => {
  let component: ImmuneTableComponent;
  let fixture: ComponentFixture<ImmuneTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmuneTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmuneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
