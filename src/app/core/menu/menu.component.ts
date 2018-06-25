import {
  animate,
  state,
  style,
  transition,
  trigger
  } from '@angular/animations';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { delay, map, pairwise } from 'rxjs/operators';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MenuLinks } from './menu-links';
import { NavigationEnd, Router } from '@angular/router';
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
          // backgroundColor: 'rgba(255, 255, 255, 0.6)',
          backgroundColor: '#0a5afe',
          color: 'white',
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
      transition('* => show', animate('700ms ease-in')),
    ]),
  ],
})
export class MenuComponent implements OnInit {
  isHandset: Observable<BreakpointState>;
  toolbarState: string;
  scrolling = new Subject();
  readonly TOOLBAR_DEBOUNCE_TIME = 100;
  showedMenuLinks: any[];
  @ViewChild('drawer') sideNav: MatSidenav;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.scrolling.next(window.pageYOffset);
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private el: ElementRef,
    private router: Router,
  ) {
    this.isHandset = this.breakpointObserver.observe(Breakpoints.Handset);
    this.showedMenuLinks = MenuLinks;
  }

  ngOnInit() {
    this.subscribeToScroll();
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  subscribeToScroll() {
    this.scrolling
      .pipe(
        delay(this.TOOLBAR_DEBOUNCE_TIME),
        pairwise(),
        map(([previousValue, newValue]) => {
          if (newValue < 80) {
            return 'hide';
          } else {
            return 'show';
          }
        }),
      )
      .subscribe((toolbarState) => {
        this.toolbarState = toolbarState;
      });
  }
}
