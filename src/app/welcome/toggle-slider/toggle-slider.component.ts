import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-slider',
  templateUrl: './toggle-slider.component.html',
  styleUrls: [ './toggle-slider.component.scss' ]
})
export class ToggleSliderComponent implements OnInit {

  @Output() selectedSide: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() { }
  test() {
    console.log('ok');
  }
}
