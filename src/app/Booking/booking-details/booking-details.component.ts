import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  loggedIn: boolean;
  flightSubmitted: boolean;

  loginForm: FormGroup;
  flightForm: FormGroup;
  PassengerForm: FormGroup;

  Arr = Array;
  nOfPassengers: number;
  newPassenger: object;
  allPassengers = [];
  passengersList = [];

  constructor(private router: Router) { }

  ngOnInit() {

    this.loggedIn = false;
    this.flightSubmitted = false;

    // validation on login form
    this.loginForm = new FormGroup({
      uname: new FormControl('', Validators.required),
      psw: new FormControl('', Validators.required)
    });

    // validation on flight datails form
    this.flightForm = new FormGroup({
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      nop: new FormControl('', Validators.compose([Validators.required, Validators.min(1), Validators.max(10)]))
    });

    // validation on passenger datails form
    this.PassengerForm = new FormGroup({
      fn: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]+$')])),
      ln: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]+$')])),
      date: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.compose([Validators.required, Validators.pattern('0[0-9]{10}')]))
    });

  }

  // function to show flight details form
  loginClicked() {
    if (this.loginForm.valid) {
      this.loggedIn = true;
    }
  }

  // function to show passengers details form according to number of passengers
  flighClicked() {
    localStorage.setItem('nop', (document.getElementById('PassengersNo') as HTMLInputElement).value);
    this.nOfPassengers = parseInt(localStorage.getItem('nop'), 10);
    if (this.flightForm.valid) {
      this.flightSubmitted = true;
    }
  }

  // function to show passengers details cards entered before
  passengerClicked() {

    if (this.PassengerForm.valid) {
      console.log('valid1');
      this.router.navigate(['screen2']);
      console.log('valid2');
    }

    for (let i = 0; i < this.nOfPassengers; i++) {
      this.newPassenger = {
        fn: (document.getElementsByClassName('fname')[i] as HTMLInputElement).value,
        ln: (document.getElementsByClassName('lname')[i] as HTMLInputElement).value,
        bd: (document.getElementsByClassName('bdate')[i] as HTMLInputElement).value
      };
      this.allPassengers.push(this.newPassenger);
    }

    localStorage.setItem('list', JSON.stringify(this.allPassengers));
  }
}
