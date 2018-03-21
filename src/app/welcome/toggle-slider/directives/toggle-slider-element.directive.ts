import { Directive, HostListener, Renderer2, ElementRef } from "@angular/core";

@Directive({
	selector: "[appSlideEl]"
})
export class ToggleSliderElementDirective {
	constructor(private el: ElementRef, private renderer: Renderer2) {}

	@HostListener("transitionend") onTransitionEnd() {
		this.renderer.removeClass(this.el.nativeElement, "animate-slide");
	}
}
