import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-call-for-papers',
  templateUrl: './call-for-papers.component.html',
  styleUrls: ['./call-for-papers.component.scss']
})
export class CallForPapersComponent implements OnInit, AfterViewInit {

  parallaxBox;
  @ViewChild('firstCircle') firstCircle: ElementRef;
  @ViewChild('secondCircle') middleCircle: ElementRef;
  @ViewChild('thirdCircle') smallCircle: ElementRef;
  viewPortWidth;
  viewPortHeight;
  rotation = 0;
  delta = 10;
  bounceCounter = 0;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.parallaxBox = document.getElementById('box');
    this.getViewPortBoundaries();
  }


  animateElements(event) {

    if (this.bounceCounter == 0) {
     
      event = event || window.event;
      let x = event.clientX - this.parallaxBox.offsetLeft,
      y = event.clientY - this.parallaxBox.offsetTop;
      
      let offsetX = 0.5 - event.pageX / this.viewPortWidth;
      let offsetY = 0.5 - event.pageY / this.viewPortHeight;
  

      let fc = this.firstCircle.nativeElement;
      let sc = this.middleCircle.nativeElement;
      let tc = this.smallCircle.nativeElement;

      let offsetXForFC = parseInt(fc.x);
      let offsetYForFC = parseInt(fc.y);
      let offsetXForSC = parseInt(sc.x);
      let offsetYForSC = parseInt(sc.y);
      let offsetXForTC = parseInt(tc.x);
      let offsetYForTC = parseInt(tc.y);
      this.rotation += 0.6;
      
      let transformFC = "translate(" + Math.round(offsetX * offsetXForFC / this.delta) + "px," + Math.round(offsetY * offsetYForFC / this.delta) + "px) rotate(" + this.rotation + "deg)";
      let transformSC = "translate(" + Math.round(offsetX * offsetXForSC / this.delta) + "px," + Math.round(offsetY * offsetYForSC / this.delta) + "px) rotate(" + this.rotation + "deg)";
      let transformTC = "translate(" + Math.round(offsetX * offsetXForTC / this.delta) + "px," + Math.round(offsetY * offsetYForTC / this.delta) + "px) rotate(" + this.rotation + "deg)";
      fc.style.transform = transformFC;
      sc.style.transform = transformSC;
      tc.style.transform = transformTC;
      this.bounceCounter = 1;
    } else {
      this.bounceCounter = 0; 
    }
  }

  getViewPortBoundaries(): void {
    this.viewPortWidth = window.innerWidth;
    this.viewPortHeight = window.innerHeight;
  }


}
