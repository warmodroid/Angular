import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  EmpDetails = [
    {name:"abc",age:21},
    {name:"xyz",age:32},
    {name:"qwe",age:22}
  ]

  constructor() { }

  getEmpDetails(){
    return this.EmpDetails;
  }

}
