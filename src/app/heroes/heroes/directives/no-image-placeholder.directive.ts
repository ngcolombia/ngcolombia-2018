import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[no-image-placeholder]',
})
export class NoImagePlaceholderDirective implements OnInit {

  constructor(private el: ElementRef) { }
  
  ngOnInit() {
    this.el.nativeElement.addEventListener("error", this.imgError);
  } 


  imgError = ()=> {
    this.el.nativeElement.onerror = "";
    this.el.nativeElement.src = "http://i.pravatar.cc/600";
    console.log('error');
  }
}