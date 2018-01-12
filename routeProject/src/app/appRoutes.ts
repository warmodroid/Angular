import {Routes} from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { ThirdCompComponent } from './third-comp/third-comp.component';
import { RouterModule } from '@angular/router';


const AppRoutes:Routes = [
    {path:"oneComp",component:FirstCompComponent},
    {path:"secondComp",component:SecondCompComponent},
    {path:"thirdComp",component:ThirdCompComponent}
]

export const routing = RouterModule.forRoot(AppRoutes);