import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hoverFunction(id){
    id.style.width = "165px";
    id.style.height = "165px";
  }
  hoverFunctionLeave(id){
    id.style.width = "145px";
    id.style.height = "150px";
  }
  specialHoverFunction(id){
    id.style.width = "155px";
    id.style.height = "165px";
  }
  specialHoverFunctionLeave(id){
    id.style.width = "130px";
    id.style.height = "150px";
  }

}
