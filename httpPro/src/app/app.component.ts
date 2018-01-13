import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { HttpClient } from '@angular/common/http/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  empDetails:any;
  body = {name:"Mohit"};
  

  constructor(private ser:MyServiceService,private http:HttpClient){
    
  }


  ngOnInit(){
    this.empDetails = this.ser.getEmpDetails();
  }

  onPost(){
    this.http.post('https://anguar2course.firebaseio.com/products.json',this.body).subscribe((response:Response)=>{});
  }
}
