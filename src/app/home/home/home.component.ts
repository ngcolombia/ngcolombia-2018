import { Component, OnInit } from '@angular/core';
import { ImageList } from '../home-banner/image-list.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  learnBigText = "learn";
  learnSubText = "Learn everything you need about Angular";
  meetBigText = "meet";
  meetSubText = "Meet other passionate people like you";
  shareBigText = "share";
  shareSubText = "Share your experience with the world";

  imagesList: ImageList[];

  constructor() {
    this.imagesList = [
      {
        path: 'learn/BOLITA1_desktop.png',
        position: {
          x: '-415px',
          y: '0'
        },
        layer: 'bottom',
        device: 'desktop'
      },
      {
        path: 'learn/BOLITA2_desktop.png',
        position: {
          x: '-4%',
          y: '11%'
        },
        layer: 'front',
        device: 'desktop'
      },
      {
        path: 'learn/BOLITA3_desktop.png',
        position: {
          x: '65%',
          y: '6%'
        },
        layer: 'front',
        device: 'desktop'
      },
      {
        path: 'learn/BOLITA1_mobile.png',
        position: {
          x: '-64%',
          y: '5%'
        },
        layer: 'bottom',
        device: 'mobile'
      },
      {
        path: 'learn/BOLITA2_mobile.png',
        position: {
          x: '-16%',
          y: '16%'
        },
        layer: 'front',
        device: 'mobile'
      },
      {
        path: 'learn/BOLITA3_mobile.png',
        position: {
          x: '53%',
          y: '3%'
        },
        layer: 'front',
        device: 'mobile'
      },
      {
        path: 'meet/BOLITA1_desktop.png',
        position: {
          x: '76%',
          y: '30%'
        },
        layer: 'front',
        device: 'desktop'
      },
      {
        path: 'meet/BOLITA3_desktop.png',
        position: {
          x: '14%',
          y: '37%'
        },
        layer: 'bottom',
        device: 'desktop'
      },
      {
        path: 'meet/BOLITA2_desktop.png',
        position: {
          x: '-11%',
          y: '44%'
        },
        layer: 'bottom',
        device: 'desktop'
      },
      {
        path: 'meet/BOLITA1_mobile.png',
        position: {
          x: '48%',
          y: '45%'
        },
        layer: 'front',
        device: 'mobile'
      },
      {
        path: 'meet/BOLITA3_mobile.png',
        position: {
          x: '-9%',
          y: '32%'
        },
        layer: 'bottom',
        device: 'mobile'
      },
      {
        path: 'meet/BOLITA2_mobile.png',
        position: {
          x: '-56%',
          y: '30%'
        },
        layer: 'bottom',
        device: 'mobile'
      },
      {
        path: 'share/BOLITA1_desktop.png',
        position: {
          x: '-19%',
          y: '70%'
        },
        layer: 'bottom',
        device: 'desktop'
      },
      {
        path: 'share/BOLITA2_desktop.png',
        position: {
          x: '80%',
          y: '68%'
        },
        layer: 'bottom',
        device: 'desktop'
      },
      {
        path: 'share/BOLITA3_desktop.png',
        position: {
          x: '77%',
          y: '64%'
        },
        layer: 'front',
        device: 'desktop'
      },
      {
        path: 'share/BOLITA4_desktop.png',
        position: {
          x: '5%',
          y: '88%'
        },
        layer: 'front',
        device: 'desktop'
      },
      {
        path: 'share/BOLITA1_mobile.png',
        position: {
          x: '-62%',
          y: '76%'
        },
        layer: 'bottom',
        device: 'mobile'
      },
      {
        path: 'share/BOLITA2_mobile.png',
        position: {
          x: '29%',
          y: '62%'
        },
        layer: 'bottom',
        device: 'mobile'
      },
      {
        path: 'share/BOLITA3_mobile.png',
        position: {
          x: '37%',
          y: '68%'
        },
        layer: 'front',
        device: 'mobile'
      },
      {
        path: 'share/BOLITA4_mobile.png',
        position: {
          x: '7%',
          y: '87%'
        },
        layer: 'front',
        device: 'mobile'
      }
    ];
  }

  ngOnInit() {
    
  }

  getUrl(image):string {
    return `assets/img/home/${image.path}`
  }

  getPositionStyles(image): string {
    return `{left: ${image.position.x}, top: ${image.position.y}}`;
  }

}
