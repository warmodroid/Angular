import {Routes} from '@angular/router';
import { LoanCompComponent } from './loan-comp/loan-comp.component';
import { RouterModule } from '@angular/router';
import { LRoute } from './loanRouting';

const AppRout:Routes = [
    {path:"loan",component:LoanCompComponent, children:LRoute }
];

export const routing = RouterModule.forRoot(AppRout);

