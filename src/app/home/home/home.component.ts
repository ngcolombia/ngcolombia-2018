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

  learnImages: ImageList[];
  meetImages: ImageList[];
  shareImages: ImageList[];

  constructor() {
    this.learnImages = [
      {
        path: 'learn/BOLITA1_desktop.png',
        position: {
          x: '-415px',
          y: '2%'
        },
        layer: 'bottom'
      },
      {
        path: 'learn/BOLITA2_desktop.png',
        position: {
          x: '3%',
          y: '50%'
        },
        layer: 'front'
      },
      {
        path: 'learn/BOLITA3_desktop.png',
        position: {
          x: '65%',
          y: '20%'
        },
        layer: 'front'
      }
    ];

    this.meetImages = [
      {
        path: 'meet/BOLITA1_desktop.png',
        position: {
          x: '90%',
          y: '40%'
        },
        layer: 'front'
      },
      {
        path: 'meet/BOLITA2_desktop.png',
        position: {
          x: '-3%',
          y: '30%'
        },
        layer: 'front'
      },
      {
        path: 'meet/BOLITA3_desktop.png',
        position: {
          x: '24%',
          y: '13%'
        },
        layer: 'bottom'
      }
    ];

    this.shareImages = [
      {
        path: 'share/BOLITA1_desktop.png',
        position: {
          x: '-10%',
          y: '52%'
        },
        layer: 'bottom'
      },
      {
        path: 'share/BOLITA2_desktop.png',
        position: {
          x: '80%',
          y: '-2%'
        },
        layer: 'bottom'
      },
      {
        path: 'share/BOLITA3_desktop.png',
        position: {
          x: '63%',
          y: '57%'
        },
        layer: 'front'
      },
      {
        path: 'share/BOLITA3_desktop.png',
        position: {
          x: '35%',
          y: '80%'
        },
        layer: 'front'
      }
    ]

   }

  ngOnInit() {
  }

}
