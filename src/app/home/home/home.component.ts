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

  constructor() { }

  ngOnInit() {
  }

}
