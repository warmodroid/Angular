import {Routes} from '@angular/router';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { Router } from '@angular/router/src/router';
import { AppModule } from './app.module';
import { RouterModule } from '@angular/router';
const AppRoute:Routes = [
    {path:"secondComp/:name",component:SecondCompComponent}
]

export const rout = RouterModule.forRoot(AppRoute);