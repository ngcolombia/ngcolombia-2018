import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  showToBar = true;
  constructor(private router: Router, private location: Location) {
    router.events.subscribe(() => {
      this.showToBar = !(location.path() !== '' && location.path() === '/tickets');
    });
  }

  ngOnInit() {}
}
