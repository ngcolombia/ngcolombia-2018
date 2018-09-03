import { Component, OnInit } from '@angular/core';
import { heroesData } from "./heroes.data";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  people: any;

  heroes: any;

  constructor() { }

  ngOnInit() {
    this.heroes = heroesData.sort((a, b) =>  (0.5 - Math.random()));
    this.people = this.createRows(this.heroes);
  }

  createRows(arrayToReorder){
    let newArray = [];
    arrayToReorder.forEach((currentValue, index, initialArray) => {
      if(index % 2 == 0){
        newArray.push( initialArray.slice(index, index + 2) );
      }
    });
    return newArray;
  }

}
