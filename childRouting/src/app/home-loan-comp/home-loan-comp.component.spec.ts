import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoanCompComponent } from './home-loan-comp.component';

describe('HomeLoanCompComponent', () => {
  let component: HomeLoanCompComponent;
  let fixture: ComponentFixture<HomeLoanCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLoanCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoanCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
