import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCompComponent } from './loan-comp.component';

describe('LoanCompComponent', () => {
  let component: LoanCompComponent;
  let fixture: ComponentFixture<LoanCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
