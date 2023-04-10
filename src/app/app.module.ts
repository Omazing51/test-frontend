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

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'hotel', component:HotelComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ModalComponent,
    HotelComponent
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
