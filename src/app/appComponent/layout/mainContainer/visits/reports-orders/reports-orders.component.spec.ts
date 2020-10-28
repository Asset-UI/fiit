import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsOrdersComponent } from './reports-orders.component';

describe('ReportsOrdersComponent', () => {
  let component: ReportsOrdersComponent;
  let fixture: ComponentFixture<ReportsOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
