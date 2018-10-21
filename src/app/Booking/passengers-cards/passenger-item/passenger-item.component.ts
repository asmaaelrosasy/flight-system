import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-item',
  templateUrl: './passenger-item.component.html',
  styleUrls: ['./passenger-item.component.css']
})
export class PassengerItemComponent implements OnInit {

  passengersList = [];

  constructor() { }


  ngOnInit() {

    this.passengersList = JSON.parse(localStorage.getItem('list'));

    for (let i = 0; i < this.passengersList.length; i++) {
      (document.getElementsByClassName('fname')[i] as HTMLParagraphElement).innerHTML = this.passengersList[i].fn;
      (document.getElementsByClassName('lname')[i] as HTMLParagraphElement).innerHTML = this.passengersList[i].ln;
      (document.getElementsByClassName('bdate')[i] as HTMLParagraphElement).innerHTML = this.passengersList[i].bd;
    }
  }

}


