import { Component, OnInit } from '@angular/core';

import{trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-animation-feature',
  templateUrl: './animation-feature.component.html',
  styleUrls: ['./animation-feature.component.css'],
  animations: [
    trigger('photoState',[
      state('move',style({
        transform: 'translateX(-50%)',
      })),
      state('enlarge', style({
        transform: 'scale(1.5)',
      })),
      state('spin', style({
        transform: 'rotateY(180deg) rotateZ(90deg)',
      })),
      transition('* => *', animate('500ms ease')),
    ])
  ]
})
export class AnimationFeatureComponent implements OnInit {

  position: string;

  constructor() { }

  changePosition(newPosition : string){
    this.position = newPosition;
  }
  ngOnInit(){

  }

}
