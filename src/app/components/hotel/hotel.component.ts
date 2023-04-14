import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { HotelI } from 'src/app/models/hotel.interface';
import { DataService } from 'src/app/services/data.service';
import { SecurityService } from 'src/app/services/security.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent {
  public modalSwitch : any;
  hotels: HotelI[] = [];
  constructor(private dataService: DataService, private securityService: SecurityService, private modalH:SwitchService) {}

  ngOnInit(){
    this.modalH.$modal.subscribe((value=>{this.modalSwitch = value}));
    const url = 'https://localhost:7066/api/hotels';
    this.dataService.get<HotelI[]>(url,).subscribe(res => {
     this.hotels =  res.body;
    }),
    err=> {
      console.log('No se pudieron cargar los hoteles', err);
    }
  }
  openModal()
  {
      this.modalSwitch = true;
  }

}
