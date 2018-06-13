import { Directive, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[parallaxScroll]',
})
export class ParallaxScrollDirective implements OnInit, AfterViewInit {
  source: any;
  elementHeight: any;
  items: HTMLElement[] = [];

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    const elmHeight = this.element.nativeElement.offsetHeight;
    const elmYPos = this.element.nativeElement.offsetTop;
    this.source = fromEvent(document, 'scroll');
    this.source.subscribe((event) => {
      if (
        window.pageYOffset + window.innerHeight >= elmYPos &&
        elmYPos + elmHeight >= window.pageYOffset
      ) {
        if (this.items && this.items.length > 0) {
          this.updatePositions(elmYPos);
        }
      }
    });
  }

  ngAfterViewInit() {
    this.getChildrenToScroll();
  }

  getChildrenToScroll() {
    this.items.push(
      Array.apply(null, this.element.nativeElement.querySelectorAll('.ball')),
    );
    this.items = [].concat.apply([], this.items);
  }

  updatePositions(parentTop) {
    this.items.forEach((item: HTMLElement) => {
      const isMobile = item.classList.contains('mobile');
      let value = isMobile ? '' : 'scale(0.7) ';
      if (item.classList.contains('front')) {
        value += `translateY(-${window.pageYOffset * 0.17}px)`;
      } else if (item.classList.contains('bottom')) {
        value += `translateY(-${window.pageYOffset * 0.11}px)`;
      }
      item.style.transform = value;
    });
  }
}
