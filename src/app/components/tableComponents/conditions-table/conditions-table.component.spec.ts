import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsTableComponent } from './conditions-table.component';

describe('ConditionsTableComponent', () => {
  let component: ConditionsTableComponent;
  let fixture: ComponentFixture<ConditionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
