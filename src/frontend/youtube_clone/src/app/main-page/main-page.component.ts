import { Component } from '@angular/core';
import { MockVideos } from '../mock-videos';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent { 
  mockVideos = [...MockVideos];
}
