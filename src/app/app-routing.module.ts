import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BookingDetailsComponent } from './Booking/booking-details/booking-details.component';
import { PassengersCardsComponent } from './Booking/passengers-cards/passengers-cards.component';
import { ContactUsComponent } from './Booking/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/screen1', pathMatch: 'full' },
  { path: 'screen1', component: BookingDetailsComponent },
  { path: 'screen2', component: PassengersCardsComponent },
  { path: 'screen3', component: ContactUsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
