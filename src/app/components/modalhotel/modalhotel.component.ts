import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HcI } from 'src/app/models/hclass.interface';
import { HotelI } from 'src/app/models/hotel.interface';
import { HotelI2 } from 'src/app/models/hoteli2.interface';
import { HsuI } from 'src/app/models/hstatus.interface';
import { LocationI } from 'src/app/models/location.interface';
import { ResponseI } from 'src/app/models/response.interface';
import { DataService } from 'src/app/services/data.service';
import { SecurityService } from 'src/app/services/security.service';
import { SwitchHService } from 'src/app/services/switch-h.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-modalhotel',
  templateUrl: './modalhotel.component.html',
  styleUrls: ['./modalhotel.component.scss']
})
export class ModalhotelComponent implements OnDestroy{

  
  hotelclasses: HcI[] = [];
  hotelstatusses: HsuI[] = [];
  locations: LocationI[] = [];
  formHotel: FormGroup;
  subRef$: Subscription;

  constructor(private modalH: SwitchHService, private formBuilder: FormBuilder,
    private dataService: DataService, private securityService: SecurityService, private router: Router, private http: HttpClient ) 
    {
        this.formHotel = formBuilder.group({
          hotelName: ['', Validators.required],
          hotelDescription: [''],
          location: ['', Validators.required],
          hotelClass: [''],
          hotelStatus: ['', Validators.required],          
        });
    }

  ngOnInit(){
    /* Get Ubicaciones */ 
    const url = 'https://localhost:7066/api/locations';
    this.dataService.get<LocationI[]>(url).subscribe(res => {
     this.locations =  res.body;
     console.log(this.locations);
    }),
    err=> {
      console.log('No se pudieron cargar las ubicaciones', err);
    }

     /* Get Clases */ 
     const url2 = 'https://localhost:7066/api/hotelclasses';
    this.dataService.get<HcI[]>(url2).subscribe(res => {
     this.hotelclasses =  res.body;
     console.log(this.hotelclasses);
    }),
    err=> {
      console.log('No se pudieron cargar las clases', err);
    }

        /* Get Estados */ 
        const url3 = 'https://localhost:7066/api/hotelstatuses';
        this.dataService.get<HsuI[]>(url3).subscribe(res => {
          this.hotelstatusses =  res.body;
          console.log(this.hotelstatusses);
         }),
         err=> {
           console.log('No se pudieron cargar los estados', err);
         }
  }

  Save()
  {
    const hotelData: HotelI2 = {
      hotelName: this.formHotel.value.hotelName,
      hotelDescription: this.formHotel.value.hotelDescription,
      locationId: this.formHotel.value.location,
      hotelClassId: this.formHotel.value.hotelClass,
      hotelStatusId: this.formHotel.value.hotelStatus,
    };
    console.log(hotelData);

    const url4 = 'https://localhost:7066/api/hotels';
   this.subRef$ =  this.dataService.post<any>(url4,
    hotelData).subscribe(res => {
      this.closeModal();
      window.location.reload();
    }, err=> {
      console.log("Error al guardar el hotel", err);
    });
  }

  

  ngOnDestroy(): void {
    if (this.subRef$)
    {
        this.subRef$.unsubscribe();
    }
  }
 

    closeModal()
    {
        this.modalH.$modal.emit(false);
    }
}
