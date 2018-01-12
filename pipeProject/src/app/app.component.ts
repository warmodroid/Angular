import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todayDate = Date.now();
  myName="";

  emp = {name:"mohit",gender:"male"}


  
}
