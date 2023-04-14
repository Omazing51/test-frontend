import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelImageI } from 'src/app/models/himage.interface';
import { HotelI } from 'src/app/models/hotel.interface';
import { DataService } from 'src/app/services/data.service';
import { SwitchHService } from 'src/app/services/switch-h.service';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss']
})
export class ModalImageComponent {

  files:any = [];
  previsualization: string;
  hotels: HotelI[] = [];
  formImage: FormGroup;
  constructor(private modalH: SwitchHService, private formBuilder: FormBuilder, private dataService: DataService) {
    this.formImage = formBuilder.group({
      hotel: ['', Validators.required],
      imageURL: [''],      
    });
  }
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

  takeFile(event)
  {
    const takingFile = event.target.files[0];
    this.files.push(this.takeFile);
    this.extraerBase64(takingFile).then((img:any) => 
      {
        this.previsualization = img.base.split(',');
     
      });
    // console.log(event.target.files);
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })

  uploadFile(): any
  {
    try {
      const formImage = new FormData();
      this.files.forEach(archivo => {
        formImage.append('hotelimages', archivo.base.split(','))
      })
      
      formImage.append('hotelId', this.formImage.value.hotel)
      this.dataService.post('https://localhost:7066/api/hotelimages', formImage)
        .subscribe(res => {
          console.log('Respuesta del servidor', res);

        }, () => {
          alert('Error');
        })
    } catch (e) {
      console.log('ERROR', e);

    }
  }

  closeModal()
  {
      this.modalH.$modal.emit(false);
  }
}
