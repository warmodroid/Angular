import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(name:string,gender:string): string {
    if(gender === 'male' || gender === 'Male'){
      return "Mr "+name;
    }
    else{
      return "Mrs "+name;
    }
  }

}
