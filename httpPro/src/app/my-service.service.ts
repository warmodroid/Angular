import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MyServiceService {
  url = "https://anguar2course.firebaseio.com/products.json"
  constructor(private _http:HttpClient) { }

  getEmpDetails(){
    return this._http.get(this.url).subscribe( (response:Response)=>{} );
  }
}
