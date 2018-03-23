import {
  Directive,
  AfterViewInit,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appMadness]',
})
export class MadnessDirective implements AfterViewInit, OnChanges {
  boxParent: any;
  viewPortWidth: number;
  viewPortHeight: number;
  elementsOffset: { left: number; top: number }[] = [];
  rotation = 0;
  delta = 0.4; // con massDelta
  // delta = 12;
  bounceCounter = 0;
  enabledFlag = false;

  items: any[] = [];

  @Input() madnessEnabled = false;

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    this.items.push(
      Array.apply(null, this.element.nativeElement.querySelectorAll('span')),
    );
    this.items.push(
      Array.apply(null, this.element.nativeElement.querySelectorAll('div')),
    );
    this.items.push(
      Array.apply(null, this.element.nativeElement.querySelectorAll('p')),
    );
    this.items.push(
      Array.apply(null, this.element.nativeElement.querySelectorAll('button')),
    );
    this.items.push(
      Array.apply(
        null,
        this.element.nativeElement.querySelectorAll('img:not(.mobile)'),
      ),
    );
    this.items = [].concat.apply([], this.items);

    this.getViewPortBoundaries();
    this.findElementsOffset();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.madnessEnabled.previousValue === false && changes.madnessEnabled.currentValue === true) {
      this.enabledFlag = true;
    } else if (changes.madnessEnabled.previousValue === true && changes.madnessEnabled.currentValue === false) {
      this.items.forEach(item => {
        item.style.display = '';
        item.style.transform = 'translate(0px,0px) rotate(0deg)';
      });
    }
  }

  setInitialStyles() {
    this.items.forEach(item => {
      item.style.transition = 'transform 1s ease-out';
      item.style.display = 'inline-block';
    });
  }

  findElementsOffset() {
    this.items.forEach(element => {
      this.elementsOffset.push({
        left: element.offsetLeft,
        top: element.offsetTop,
      });
    });
  }

  parallaxBoxInPath(elmnt):boolean{
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
      if (this.enabledFlag) {
        this.setInitialStyles();
        this.enabledFlag = false;
      }

      event = event || window.event;
      const offsetX = 0.5 - event.pageX / this.viewPortWidth;
      const offsetY = 0.5 - event.pageY / this.viewPortHeight;
      const massDelta = this.element.nativeElement.offsetHeight * 0.05;
      this.rotation += 5;

      const transaltionsArray = this.elementsOffset.map(offsetPair => {
        const xTranslation = Math.round(offsetX * offsetPair.left / this.delta);
        const yTranslation = Math.round(offsetY * offsetPair.left / this.delta);
        return [xTranslation, yTranslation];
      });

      const transformsArray = transaltionsArray.map(item => {
        const tranformText = `translate(${item[0] + 50}px,${item[1] +
          5}px) rotate(${this.rotation}deg)`;
        return tranformText;
      });

      this.items.forEach((element, index) => {
        element.style.transform = transformsArray[index];
      });
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
    if (path && event.path.indexOf(this.boxParent) !== -1 && this.madnessEnabled) {
      this.animateElement(event);
    } else if (this.parallaxBoxInPath(event.target) && this.madnessEnabled) {
      this.animateElement(event);
    } else if (!this.madnessEnabled && this.rotation !== 0) {
      this.rotation = 0;
    }
  }
}
