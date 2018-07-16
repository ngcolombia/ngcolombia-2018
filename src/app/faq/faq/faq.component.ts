import { Component, OnInit } from '@angular/core';
import { QUESTIONS } from './questions-data';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  questions: { title: string; description: string }[] = QUESTIONS;

  constructor() {}

  ngOnInit() {}
}
