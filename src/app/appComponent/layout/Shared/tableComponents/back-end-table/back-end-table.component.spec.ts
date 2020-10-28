import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndTableComponent } from './back-end-table.component';

describe('BackEndTableComponent', () => {
  let component: BackEndTableComponent;
  let fixture: ComponentFixture<BackEndTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackEndTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
