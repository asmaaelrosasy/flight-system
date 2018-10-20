import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BookingModule } from './Booking/Booking.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BookingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
