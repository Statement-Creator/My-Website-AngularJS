import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.css']
})
export class MySkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  specialHoverFunction(id){
    id.style.width = "45px";
    id.style.height = "45px";
  }
  specialHoverFunctionLeave(id){
    id.style.width = "40px";
    id.style.height = "40px";
  }

}
