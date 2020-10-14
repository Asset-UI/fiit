import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsTableComponent } from './meds-table.component';

describe('MedsTableComponent', () => {
  let component: MedsTableComponent;
  let fixture: ComponentFixture<MedsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
