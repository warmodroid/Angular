import { Routes } from "@angular/router";
import { HomeLoanCompComponent } from './home-loan-comp/home-loan-comp.component';
import { CarLoanCompComponent } from "./car-loan-comp/car-loan-comp.component";
import { RouterModule } from "@angular/router";

export const LRoute :Routes = [
    {path:"homeLoan",component:HomeLoanCompComponent},
    {path:"carLoan",component:CarLoanCompComponent}
];

export const LRout = RouterModule.forRoot(LRoute);