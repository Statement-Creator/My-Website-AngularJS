import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../youtube-api.service';

@Component({
  selector: 'app-api-example',
  templateUrl: './api-example.component.html',
  styleUrls: ['./api-example.component.css']
})
export class ApiExampleComponent implements OnInit {

  subCount;

  constructor(public youtubeApiService: YoutubeApiService) { }

  ngOnInit() {
    this.youtubeApiService.getSubs().subscribe((data)=>{
      this.subCount = data.items[0].statistics.subscriberCount;
    })
  }

}
