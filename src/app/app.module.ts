import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { OptionsComponent } from './components/options/options.component';
import { ModalhotelComponent } from './components/modalhotel/modalhotel.component';
import { HotelimageComponent } from './components/hotelimage/hotelimage.component';
import { RoomimageComponent } from './components/roomimage/roomimage.component';
import { RoomComponent } from './components/room/room.component';
import { BookingComponent } from './components/booking/booking.component';
import { ModalImageComponent } from './components/modal-image/modal-image.component';
import { HotelRoomComponent } from './components/hotel-room/hotel-room.component';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'hotel', component:HotelComponent},
  {path:'options', component:OptionsComponent},
  {path:'hotelimage', component:HotelimageComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ModalComponent,
    HotelComponent,
    OptionsComponent,
    ModalhotelComponent,
    HotelimageComponent,
    RoomimageComponent,
    RoomComponent,
    BookingComponent,
    ModalImageComponent,
    HotelRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
