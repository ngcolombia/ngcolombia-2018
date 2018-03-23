import { Directive, HostListener, OnInit, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[pbb]',
})
export class ParallaxBigBangDirective implements OnInit, AfterViewInit {

  boxParent: any;
  viewPortWidth: number;
  viewPortHeight: number;
  elementOffset: { x: number, y: number };
  rotation = 0;
  // delta = 9; //con massDelta
  delta = 0.4;
  bounceCounter = 0;

  timer: any;

  allowWindow: boolean;



  @Input() pbbEnabled: boolean;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.boxParent = this.findAncestor(this.element.nativeElement, 'parallax-box');
    this.element.nativeElement.style.transition = 'transform 1s ease-out';
  }

  ngAfterViewInit() {
    this.getViewPortBoundaries();
    this.elementOffset = {
      x: this.element.nativeElement.offsetLeft,
      y: this.element.nativeElement.offsetTop,
    };
  }

  findAncestor(elmnt, className) {
    while ((elmnt = elmnt.parentElement) && !elmnt.classList.contains(className)) {
      return elmnt;
    }
  }

  parallaxBoxInPath(elmnt): boolean {
    while ((elmnt = elmnt.parentElement) && !elmnt.classList.contains('parallax-box')) {
      return true;
    }
    return false
  }

  getViewPortBoundaries(): void {
    this.viewPortWidth = window.innerWidth;
    this.viewPortHeight = window.innerHeight;
  }

  animateElement(event) {

    if (this.bounceCounter === 0) {
      event = event || window.event;
      const offsetX = 0.5 - event.pageX / this.viewPortWidth;
      const offsetY = 0.5 - event.pageY / this.viewPortHeight;
      const massDelta = this.element.nativeElement.offsetHeight * 0.05;
      this.rotation += 3;
      // const xTranslation = Math.round(offsetX * this.element.nativeElement.offsetLeft / (this.delta * massDelta));
      // const yTranslation = Math.round(offsetY * this.element.nativeElement.offsetTop / (this.delta * massDelta));
      const xTranslation = Math.round(offsetX * this.element.nativeElement.offsetLeft / this.delta);
      const yTranslation = Math.round(offsetY * this.element.nativeElement.offsetTop / this.delta);
      const transform = `translate(${xTranslation}px,${yTranslation}px) rotate(${this.rotation}deg)`;
      this.element.nativeElement.style.transform = transform;
      this.bounceCounter = 1;
    } else {
      this.bounceCounter = 0;
    }
  }

  @HostListener('window:mousemove', ['$event'])
  mousemoveEventHandler(event: any) {
    if (event.path) {
      var path = event.path;
    }
    if (path && event.path.indexOf(this.boxParent) !== -1 && this.pbbEnabled) {
      this.animateElement(event);
    } else if (this.parallaxBoxInPath(event.target) && this.pbbEnabled) {
      this.animateElement(event);
    } else if (!this.pbbEnabled && this.rotation !== 0) {
      this.rotation = 0;
    }
  }
}
