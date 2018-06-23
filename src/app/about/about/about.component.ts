import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  lat = 6.242607;
  lng = -75.576072;
  zoom = 18;
  scrollwheel = true;

  constructor() { }

  ngOnInit() {
  }


}
