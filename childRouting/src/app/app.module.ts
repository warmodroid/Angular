import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoanCompComponent } from './loan-comp/loan-comp.component';
import { HomeLoanCompComponent } from './home-loan-comp/home-loan-comp.component';
import { CarLoanCompComponent } from './car-loan-comp/car-loan-comp.component';
import { routing } from './routing';
import { LRout } from './loanRouting';


@NgModule({
  declarations: [
    AppComponent,
    LoanCompComponent,
    HomeLoanCompComponent,
    CarLoanCompComponent
  ],
  imports: [
    BrowserModule,routing,LRout
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
