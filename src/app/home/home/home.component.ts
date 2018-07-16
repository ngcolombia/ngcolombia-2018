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

  readonly BACKGROUND_COLORS = ['#A296F7','#A296F7','#A296F7','#A296F7','#A296F7','#A296F7','#A296F7','#A296F7','#A296F7','#A296F7','#A597F7','#A898F7','#AB9AF8','#AE9BF8','#B19DF9','#B49EF9','#B8A0F9','#BBA1FA','#BEA3FA','#C1A4FB','#C4A6FB','#C7A7FC','#CBA9FC','#CEAAFC','#D1ACFD','#D4ADFD','#D7AFFE','#DAB0FE','#DEB2FF','#DEB2FF','#DEB2FF','#DEB2FF','#DEB2FF','#DEB2FF','#DEB2FF','#DEB2FF','#DEB2FF','#DEB2FF','#DEB2FF','#DDB4FE','#DCB7FE','#DBB9FE','#DBBCFE','#DABEFE','#D9C1FE','#D8C3FD','#D8C6FD','#D7C8FD','#D6CBFD','#D5CDFD','#D5D0FD','#D4D2FC','#D3D5FC','#D2D7FC','#D2DAFC','#D1DCFC','#D0DFFC','#D0E2FC','#D0E2FC','#D0E2FC','#D0E2FC','#D0E2FC','#D0E2FC','#D0E2FC','#D0E2FC','#D0E2FC','#D0E2FC','#D0E2FC','#D0E2FC','#D2E3FC','#D4E5FC','#D7E6FC','#D9E8FC','#DCE9FC','#DEEBFC','#E1ECFD','#E3EEFD','#E6EFFD','#E8F1FD','#EBF2FD','#EDF4FD','#F0F5FE','#F2F7FE','#F5F8FE','#F7FAFE','#FAFBFE','#FCFDFE','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF'];

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
        this.newsletterDiv.nativeElement.style.backgroundColor = this.BACKGROUND_COLORS[this.currentYPos - 1];
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
