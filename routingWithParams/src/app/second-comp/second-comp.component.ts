import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'secondComp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {
  
  myName="";
  subscriber:any;
  constructor(private route:ActivatedRoute) { 
    this.subscriber = route.params.subscribe((data)=> {
      this.myName = data['name'];
    }
  );
    //console.log(route.params['name']);
  }

  ngOnInit() {
    
  }

}
