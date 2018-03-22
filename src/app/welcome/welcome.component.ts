import { Component, OnInit } from "@angular/core";
import { trigger, state, style, animate, transition, query } from "@angular/animations";

@Component({
	selector: "app-welcome",
	templateUrl: "./welcome.component.html",
	styleUrls: ["./welcome.component.scss"],
	animations: [trigger("toggle", [state("left", style({ width: "0" })), state("right", style({ width: "100%" })), transition("left <=> right", animate("600ms ease-out"))])]
})
export class WelcomeComponent implements OnInit {
	reveal = true;

	constructor() {}

	ngOnInit() {}

	get toggleImg() {
		return this.reveal ? "left" : "right";
	}

	changeState(side) {
		this.reveal = side === "left" ? true : false;
		// this.reveal = !this.reveal;
	}
}
