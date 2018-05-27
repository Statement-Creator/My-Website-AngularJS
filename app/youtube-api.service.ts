import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  constructor( public http : HttpClient) { }

  getSubs(){
    return this.http.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&key=AIzaSyBJMQbIF9CS9RkupP4KLBXKLVT4yaYbuGQ');
  }
}
