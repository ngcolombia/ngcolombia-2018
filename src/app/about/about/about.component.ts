import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  newsletterTitle = ['Get the', 'latest', 'news'];
  newsletterDescription = [
    'Sign up to our newsletter and be',
    'be the first to know about dates for',
    'tickets releasing and more!',
  ];
  readonly MOBILE_CENTER_LAT = 6.242510294309686;
  readonly MOBILE_CENTER_LNG = -75.5763096653595;
  readonly DESKTOP_CENTER_LAT = 6.241770294309686;
  readonly DESKTOP_CENTER_LNG = -75.5778096653595;
  latMarker = 6.2416183;
  lngMarker = -75.5763117;
  zoom = 18;
  gestureHandling = 'auto';
  panControl = true;
  lat: number;
  lng: number;
  triggerResize = false;
  mapStyles = [
    {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [
        { "color": "#b1edf3" }
      ]
    }, {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        { "color": "#334544" },
        { "visibility": "on" }
      ]
    }, {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        { "color": "#ccffff" }
      ]
    }, {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [
        { "visibility": "off" }
      ]
    }, {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        { "visibility": "on" },
        { "color": "#96dad9" },
        { "weight": 1.3 }
      ]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        { "color": "#334444" }
      ]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [
        { "visibility": "off" }
      ]
    }, {
      "featureType": "poi",
      "elementType": "labels.icon",
      "stylers": [
        { "saturation": -100 }
      ]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        { "visibility": "on" },
        { "color": "#635d64" },
        { "lightness": 57 }
      ]
    }, {
    }
  ];

  @ViewChild('agmMap') embedMap:AgmMap;

  constructor() { }

  ngOnInit() {
    this.setLatAndLong();
  }

  setLatAndLong() {
    if (window.innerWidth <= 780 && this.lat !== this.MOBILE_CENTER_LAT) {
      this.lat = this.MOBILE_CENTER_LAT;
      this.lng = this.MOBILE_CENTER_LNG;
      this.recenterMap()
    } else if (window.innerWidth > 780 && this.lat !== this.DESKTOP_CENTER_LAT) {
      this.lat = this.DESKTOP_CENTER_LAT;
      this.lng = this.DESKTOP_CENTER_LNG;
      this.recenterMap()
    }
  }

  recenterMap() {
    this.embedMap.triggerResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setLatAndLong();
  }
}
