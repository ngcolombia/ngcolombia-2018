import { Component, OnInit } from '@angular/core';

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

  learnImages: any;

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
    ]

   }

  ngOnInit() {
  }

}
