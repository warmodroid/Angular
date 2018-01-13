import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarLoanCompComponent } from './car-loan-comp.component';

describe('CarLoanCompComponent', () => {
  let component: CarLoanCompComponent;
  let fixture: ComponentFixture<CarLoanCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarLoanCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarLoanCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
