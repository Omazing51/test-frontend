import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocationI } from 'src/app/models/location.interface';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-modalhotel',
  templateUrl: './modalhotel.component.html',
  styleUrls: ['./modalhotel.component.scss']
})
export class ModalhotelComponent {

  locations: LocationI[] = [];
  formHotel: FormGroup;
  subRef$: Subscription;

  constructor(private modalH: SwitchService, private formBuilder: FormBuilder,
    private http: HttpClient, private router: Router ) 
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
    let httpHeaders: HttpHeaders = new HttpHeaders();
    const token = sessionStorage.getItem('token');
    httpHeaders = httpHeaders.append('Authorization', 'Bearer' +' '+ token);
    this.http.get<LocationI[]>('https://localhost:7066/api/locations', {
      headers: httpHeaders,
      observe: 'response'
    }).subscribe(res => {
     this.locations =  res.body;
    }),
    err=> {
      console.log('No se pudieron cargar las ubicaciones', err);
    }
  }
 

    closeModal()
    {
        this.modalH.$modal.emit(false);
    }
}
