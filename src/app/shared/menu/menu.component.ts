import {
  animate,
  state,
  style,
  transition,
  trigger
  } from '@angular/animations';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Directive } from '@angular/core';
import { delay, map, pairwise } from 'rxjs/operators';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state(
        'show',
        style({
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
        }),
      ),
      state(
        'hide',
        style({
          backgroundColor: 'transparent',
        }),
      ),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in')),
      transition('* => hide', animate('700ms ease-in')),
    ]),
  ],
})
export class MenuComponent implements OnInit {
  isHandset: Observable<BreakpointState>;
  toolbarState: string;
  scrolling = new Subject();
  readonly TOOLBAR_DEBOUNCE_TIME = 100;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.scrolling.next(window.pageYOffset);
  }
  constructor(private breakpointObserver: BreakpointObserver, private el: ElementRef) {
    this.isHandset = this.breakpointObserver.observe(Breakpoints.Handset);
  }

  ngOnInit() {
    this.scrolling
      .pipe(
        delay(this.TOOLBAR_DEBOUNCE_TIME),
        pairwise(),
        map(([previousValue, newValue]) => (previousValue >= newValue ? 'show' : 'hide')),
      )
      .subscribe(toolbarState => {
        this.toolbarState = toolbarState;
      });
  }
}
