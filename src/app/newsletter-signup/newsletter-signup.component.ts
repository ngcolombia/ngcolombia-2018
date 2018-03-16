import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { ParallaxBigBangDirective } from "./../shared/directives/parallax-bigbang.directive";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-newsletter-signup',
  templateUrl: './newsletter-signup.component.html',
  styleUrls: ['./newsletter-signup.component.scss']
})
export class NewsletterSignupComponent implements OnInit, AfterViewInit {

  pbb = false;
  timer: any;
  allowWindow: any;
  arrayOfElements: any;
  clicksCount = 0;

  @ViewChildren(ParallaxBigBangDirective) children: QueryList<any>;

  @ViewChild('ee') eeActivator: ElementRef;


  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.arrayOfElements = this.children.toArray();
    this.eeActivator.nativeElement.addEventListener("click", () => this.countClicks());
  }

  countClicks(): void {
    this.clicksCount += 1;
    if (this.clicksCount == 5) {
      this.enableBigBang();
    }
  }

  enableBigBang() {
    this.snackBar.open('move the mouse around', '', {
      duration: 2000,
    });
    this.clicksCount = 0;
    this.timer = Observable.timer(0, 10000)
      .subscribe((val) => {

        if (val == 0) {
          this.pbb = true;
        } else {
          this.snackBar.open('lets do it again!!', '', {
            duration: 2000,
          });
          this.pbb = false;
          this.restoreElements();
          this.timer.unsubscribe();
        }
      });
  }

  restoreElements() {
    this.arrayOfElements.forEach((item) => {
      item.element.nativeElement.style.transform = "translate(0px,0px) rotate(0deg)";
    });
  }

}