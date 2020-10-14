import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangselectionComponent } from './langselection.component';

describe('LangselectionComponent', () => {
  let component: LangselectionComponent;
  let fixture: ComponentFixture<LangselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangselectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
