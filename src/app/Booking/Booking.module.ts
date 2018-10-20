import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './Booking.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { LogInComponent } from './booking-details/log-in/log-in.component';
import { FlightDetailsComponent } from './booking-details/flight-details/flight-details.component';
import { PassengerDetailsComponent } from './booking-details/passenger-details/passenger-details.component';
import { PassengersCardsComponent } from './passengers-cards/passengers-cards.component';
import { PassengerItemComponent } from './passengers-cards/passenger-item/passenger-item.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {RouterModule, Routes} from '@angular/router';


@NgModule({
  declarations: [BookingComponent, BookingDetailsComponent, LogInComponent, FlightDetailsComponent,
            PassengerDetailsComponent, PassengersCardsComponent, PassengerItemComponent, ContactUsComponent],
  exports: [BookingDetailsComponent, PassengersCardsComponent, ContactUsComponent]
})
export class BookingModule { }
