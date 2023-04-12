import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { HotelI } from 'src/app/models/hotel.interface';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent {
  
  hotels: HotelI[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(){

    let httpHeaders: HttpHeaders = new HttpHeaders();
    const token = sessionStorage.getItem('token');
    console.log("get token", token);
    httpHeaders = httpHeaders.append('Authorization', 'Bearer' +' '+ token);
    this.http.get<HotelI[]>('https://localhost:7066/api/hotels', {
      headers: httpHeaders,
      observe: 'response'
    }).subscribe(res => {
     this.hotels =  res.body;
    }),
    err=> {
      console.log('No se pudieron cargar los hoteles', err);
    }
  }


}
