import { Directive, ElementRef, Renderer2, HostListener, Host, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appSlider]',
})
export class ToggleSliderDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  private isDown: Boolean = false;
  private slideEl: HTMLElement;
  private mouseDownX: number;
  private initX: number;
  private elWidth: string = getComputedStyle(this.el.nativeElement).width;

  @Output() side: EventEmitter<string> = new EventEmitter();

  @HostListener('mousedown', [ '$event' ]) onMouseDown(e) {
    this.isDown = true;
    this.mouseDownX = e.clientX;
    if (e.target.nodeName === 'SPAN') {
      this.slideEl = e.target;
      this.initX = e.target.offsetLeft;
    }
  }
  @HostListener('mousemove', [ '$event' ]) onmousemove(e) {
    if (!this.isDown || !this.slideEl) {
      return;
    }
    this.renderer.setStyle(this.slideEl, 'left', `${this.initX + e.clientX - this.mouseDownX}px`);

  }

  @HostListener('mouseup') onmouseup() {
    this.setSide();
    this.isDown = false;
    this.slideEl = undefined;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setSide();
    this.isDown = false;
    this.slideEl = undefined;

  }

  private setSide() {
    if (!this.slideEl) {
      return;
    }

    this.renderer.addClass(this.slideEl, 'animate-slide');
    let toggleside: string;
    if (this.slideEl.offsetLeft < parseInt(this.elWidth) / 2) {
      this.renderer.setStyle(this.slideEl, 'left', '4px');
      toggleside = 'left';
    } else {
      this.renderer.setStyle(this.slideEl, 'left', `calc(${this.elWidth} - 32px)`);
      toggleside = 'rigth';
    }
    this.side.emit(toggleside);
  }

}
