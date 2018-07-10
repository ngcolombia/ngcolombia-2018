import { BALL_IMAGES_LIST } from './ball-images-list';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ImageInfo } from './image-info.model';
import { fromEvent } from 'rxjs';

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

  source: any;
  elmHeight: any;
  currentYPos = 0;
  @ViewChild('wrapper') wrapperDiv: ElementRef;
  @ViewChild('newsletter') newsletterDiv: ElementRef;

  readonly BACKGROUND_COLORS = ['#A296F7', '#A297F7', '#A299F7', '#A39BF7', '#A39CF8', '#A39EF8', '#A4A0F8', '#A4A2F8', '#A4A3F9', '#A5A5F9', '#A5A7F9', '#A5A8F9', '#A6AAFA', '#A6ACFA', '#A6AEFA', '#A7AFFA', '#A7B1FB', '#A7B3FB', '#A8B4FB', '#A8B6FB', '#A8B8FC', '#A9BAFC', '#A9BBFC', '#A9BDFC', '#AABFFD', '#AAC0FD', '#AAC2FD', '#ABC4FD', '#ABC6FE', '#ABC7FE', '#ACC9FE', '#ACCBFE', '#ADCDFF', '#ADCDFF', '#AECDFE', '#AFCEFE', '#B0CEFE', '#B1CFFE', '#B2D0FE', '#B3D0FE', '#B4D1FE', '#B5D2FE', '#B6D2FE', '#B7D3FE', '#B9D4FD', '#BAD4FD', '#BBD5FD', '#BCD6FD', '#BDD6FD', '#BED7FD', '#BFD8FD', '#C0D8FD', '#C1D9FD', '#C2DAFD', '#C3DAFD', '#C5DBFC', '#C6DCFC', '#C7DCFC', '#C8DDFC', '#C9DEFC', '#CADEFC', '#CBDFFC', '#CCE0FC', '#CDE0FC', '#CEE1FC', '#D0E2FC', '#D0E2FC', '#D1E2FC', '#D2E3FC', '#D4E4FC', '#D5E5FC', '#D7E6FC', '#D8E7FC', '#DAE8FC', '#DBE9FC', '#DDEAFC', '#DEEBFC', '#E0EBFD', '#E1ECFD', '#E3EDFD', '#E4EEFD', '#E6EFFD', '#E7F0FD', '#E8F1FD', '#EAF2FD', '#EBF3FD', '#EDF4FD', '#EEF5FD', '#F0F5FE', '#F1F6FE', '#F3F7FE', '#F4F8FE', '#F6F9FE', '#F7FAFE', '#F9FBFE', '#FAFCFE', '#FCFDFE', '#FDFEFE', '#FFFFFF','#FFFFFF'];

  constructor() {
    this.imagesList = BALL_IMAGES_LIST;
  }

  ngOnInit() {
    this.source = fromEvent(document, 'scroll');
    this.source.subscribe((event) => {      
      let yPos = Math.floor(window.pageYOffset / this.elmHeight * 100);
      if (this.currentYPos !== yPos) {
        this.currentYPos = yPos;
        this.wrapperDiv.nativeElement.style.backgroundColor = this.BACKGROUND_COLORS[this.currentYPos - 1];
        this.newsletterDiv.nativeElement.style.background = `linear-gradient( to bottom, ${this.BACKGROUND_COLORS[this.currentYPos - 1]} 0%, #FFFFFF 20%, #FFFFFF 100%)`
      }
    });
  }

  ngAfterViewInit() {
    this.elmHeight = this.wrapperDiv.nativeElement.offsetHeight;
  }

  getUrl(image): string {
    return `assets/img/home/${image.path}`;
  }

  getPositionStyles(image): string {
    return `{left: ${image.position.x}, top: ${image.position.y}}`;
  }
}
