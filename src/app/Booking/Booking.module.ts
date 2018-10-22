import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './Booking.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { PassengersCardsComponent } from './passengers-cards/passengers-cards.component';
import { PassengerItemComponent } from './passengers-cards/passenger-item/passenger-item.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  declarations: [
    BookingComponent,
    BookingDetailsComponent,
    PassengersCardsComponent,
    PassengerItemComponent,
    ContactUsComponent
  ],

  exports: [
    BookingDetailsComponent,
    PassengersCardsComponent,
    ContactUsComponent
  ]
})
export class BookingModule { }
