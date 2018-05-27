import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showAbout: boolean=false;

  specialHoverFunction(id){
    id.style.width = "45px";
    id.style.height = "45px";
  }
  specialHoverFunctionLeave(id){
    id.style.width = "40px";
    id.style.height = "40px";
  }
  HoverFunction(id){
    id.style.width = "50px";
  }
  HoverFunctionLeave(id){
    id.style.width = "40px";
  }
  toggleShowAbout(id){
    this.showAbout = !this.showAbout;
    if(this.showAbout){
      id.innerHTML = "-";
    }else{
      id.innerHTML = "+";
    }
  }

}
