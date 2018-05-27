import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

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
