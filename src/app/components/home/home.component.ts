import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HotelI } from 'src/app/models/hotel.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  hotels: HotelI[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(){
    /* Get Hoteles */ 
    const url = 'https://localhost:7066/api/hotels';
    this.dataService.get<HotelI[]>(url).subscribe(res => {
     this.hotels =  res.body;
     console.log(this.hotels);
    }),
    err=> {
      console.log('No se pudieron cargar las ubicaciones', err);
    }
  }
}
