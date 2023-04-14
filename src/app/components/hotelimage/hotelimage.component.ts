import { Component } from '@angular/core';
import { HotelImageI } from 'src/app/models/himage.interface';
import { DataService } from 'src/app/services/data.service';
import { SwitchHService } from 'src/app/services/switch-h.service';

@Component({
  selector: 'app-hotelimage',
  templateUrl: './hotelimage.component.html',
  styleUrls: ['./hotelimage.component.scss']
})
export class HotelimageComponent {
  public modalSwitch : any;
   hotelimages: HotelImageI[] = [];
  constructor(private dataService: DataService, private modalH:SwitchHService) {}

  ngOnInit(){
    this.modalH.$modal.subscribe((value=>{this.modalSwitch = value}));
    // const url = 'https://localhost:7066/api/hotels';
    // this.dataService.get<HotelI[]>(url).subscribe(res => {
    //  this.hotels =  res.body;
    // }),
    // err=> {
    //   console.log('No se pudieron cargar los hoteles', err);
    // }
  }
  openModal()
  {
      this.modalSwitch = true;
  }
}
