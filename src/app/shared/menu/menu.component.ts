import {
  animate,
  state,
  style,
  transition,
  trigger
  } from '@angular/animations';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Directive, ViewChild } from '@angular/core';
import { delay, map, pairwise } from 'rxjs/operators';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { MenuLinks } from "./menu-links";

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
  private canUpdatedMenuItems = true;
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
    private router: Router
  ) {
    this.isHandset = this.breakpointObserver.observe(Breakpoints.Handset);
  }

  ngOnInit() {
    this.subscribeToScroll();
    
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
          return;
      }
      if(this.canUpdatedMenuItems){
        this.updateMenuLinks();
      }
      window.scrollTo(0, 0)
    });
  }

  updateMenuLinks(){
    let currentUrl = this.router.url;
    this.showedMenuLinks = MenuLinks.filter( (link) => link.route !== currentUrl );
  }

  subscribeToScroll(){
    this.scrolling
      .pipe(
        delay(this.TOOLBAR_DEBOUNCE_TIME),
        pairwise(),
        map(([previousValue, newValue]) => {
          if(newValue < 80){
            return 'hide';
          } else {
            return 'show';
          }
        }),
      )
      .subscribe(toolbarState => {
        this.toolbarState = toolbarState;
      });
  }

  sideNavAction(action?){
    if(action === 'closed'){
      this.canUpdatedMenuItems = true;
      this.updateMenuLinks();
    } else {
      this.canUpdatedMenuItems = false;
    }
  }
}
