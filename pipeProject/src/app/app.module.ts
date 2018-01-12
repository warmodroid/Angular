//code by warmodroid
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyPipePipe } from './my-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
