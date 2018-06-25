import { BALL_IMAGES_LIST } from './ball-images-list';
import { Component, OnInit } from '@angular/core';
import { ImageInfo } from './image-info.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  learnBigText = 'learn';
  learnSubText = 'Learn everything you need about Angular';
  meetBigText = 'meet';
  meetSubText = 'Meet other passionate people like you';
  shareBigText = 'share';
  shareSubText = 'Share your experience with the world';
  imagesList: ImageInfo[];

  constructor() {
    this.imagesList = BALL_IMAGES_LIST;
  }

  ngOnInit() {}

  getUrl(image): string {
    return `assets/img/home/${image.path}`;
  }

  getPositionStyles(image): string {
    return `{left: ${image.position.x}, top: ${image.position.y}}`;
  }
}
