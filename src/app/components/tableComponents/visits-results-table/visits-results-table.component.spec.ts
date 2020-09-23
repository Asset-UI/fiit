import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitsResultsTableComponent } from './visits-results-table.component';

describe('VisitsResultsTableComponent', () => {
  let component: VisitsResultsTableComponent;
  let fixture: ComponentFixture<VisitsResultsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitsResultsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitsResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
