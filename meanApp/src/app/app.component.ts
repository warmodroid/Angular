import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data:any;
  constructor(private http:HttpClient){

  }

  onClick(name:any,age:any){
    this.http.get("http://localhost:3000/blocks?name="+name+"&age="+age).subscribe((res)=>this.data=res);
  }
}
