import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {

    this.loggedIn = false;
    this.flightSubmitted = false;

    this.loginForm = new FormGroup({
      uname: new FormControl('', Validators.required),
      psw: new FormControl('', Validators.required)
    });

    this.flightForm = new FormGroup({
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      nop: new FormControl('', Validators.required)
    });

    this.PassengerForm = new FormGroup({
      fn: new FormControl('', Validators.required),
      ln: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^0')]))
    });
  }

  loginClicked() {
    if (this.loginForm.valid) {
      this.loggedIn = true;
    }
  }

  flighClicked() {
    if (this.flightForm.valid) {
      this.flightSubmitted = true;
    }
  }

  passengerClicked() {
    if (this.PassengerForm.valid) {
      console.log('soso');
    }
  }

}
