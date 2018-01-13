import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  emp:any;
  constructor(private myservice:MyServiceService){

  }
  
  ngOnInit(){
    this.emp = this.myservice.getEmpDetails();
  }

}
