import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { ThirdCompComponent } from './third-comp/third-comp.component';
import { routing } from './appRoutes';


@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondCompComponent,
    ThirdCompComponent
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
