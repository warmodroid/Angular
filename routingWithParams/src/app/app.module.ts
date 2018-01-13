import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { rout } from './routing';


@NgModule({
  declarations: [
    AppComponent,
    SecondCompComponent
  ],
  imports: [
    BrowserModule,rout
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
