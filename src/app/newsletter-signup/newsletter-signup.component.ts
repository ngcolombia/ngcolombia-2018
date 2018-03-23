import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { timer } from 'rxjs/observable/timer';
import { ParallaxHoverDirective } from './../shared/directives/parallax-hover.directive';
import { ParallaxBigBangDirective } from './../shared/directives/parallax-bigbang.directive';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-newsletter-signup',
  templateUrl: './newsletter-signup.component.html',
  styleUrls: ['./newsletter-signup.component.scss'],
})
export class NewsletterSignupComponent implements OnInit, AfterViewInit {

  pbb = false;
  madness = false;
  timer: any;
  allowWindow: any;
  arrayOfElements: any;
  clicksCount = 5;

  @ViewChildren(ParallaxHoverDirective) eeActivators: QueryList<any>;
  @ViewChildren(ParallaxBigBangDirective) children: QueryList<any>;
  @ViewChild('input') emailInput: ElementRef;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.arrayOfElements = this.eeActivators.toArray();
    this.eeActivators.forEach((item) => {
      const el = item.element.nativeElement;
      el.addEventListener('click', () => this.countClicks());
    });

    this.emailInput.nativeElement.addEventListener('keyup', () => this.validateInput());
  }

  countClicks(): void {
    if (!this.pbb && this.clicksCount && !this.madness) {
      this.clicksCount--;
      if (this.clicksCount !== 0) {
        this.snackBar.open(`${this.clicksCount}`, '', {
          duration: 500,
        });
      } else {
        this.enableBigBang();
      }
    }
  }

  enableBigBang() {
    this.snackBar.open('move the mouse around', '', {
      duration: 2000,
    });
    this.timer = timer(0, 10000)
      .subscribe((val) => {
        if (val === 0) {
          this.pbb = true;
          this.emailInput.nativeElement.disabled = true;
        } else {
          this.snackBar.open('lets do it again!!', '', {
            duration: 2000,
          });
          this.pbb = false;
          this.emailInput.nativeElement.disabled = false;
          this.restoreElements();
          this.clicksCount = 5;
          this.timer.unsubscribe();
        }
      });
  }

  enableMadness() {
    this.snackBar.open('move the mouse around', '', {
      duration: 2000,
    });
    this.timer = timer(0, 10000)
      .subscribe((val) => {
        if (val === 0) {
          this.madness = true;
        } else {
          this.snackBar.open('lets do it again!!', '', {
            duration: 2000,
          });
          this.madness = false;
          this.restoreElements();
          this.timer.unsubscribe();
        }
      });
  }

  restoreElements() {
    this.children.toArray().forEach((item) => {
      item.element.nativeElement.style.transform = 'translate(0px,0px) rotate(0deg)';
    });
  }

  validateInput() {
    if (!this.pbb) {
      if (this.emailInput.nativeElement.value.indexOf('ngmadness') !== -1) {
        this.enableMadness();
        this.emailInput.nativeElement.value = '';
      }
    }
  }
}
