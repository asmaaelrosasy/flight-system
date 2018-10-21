import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passengers-cards',
  templateUrl: './passengers-cards.component.html',
  styleUrls: ['./passengers-cards.component.css']
})
export class PassengersCardsComponent implements OnInit {

  nOfPassengers: number;
  Arr = Array;

  constructor() { }

  ngOnInit() {
    this.nOfPassengers = parseInt(localStorage.getItem('nop'), 10);
  }

}
