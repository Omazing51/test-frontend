import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-modalhotel',
  templateUrl: './modalhotel.component.html',
  styleUrls: ['./modalhotel.component.scss']
})
export class ModalhotelComponent {

  formHotel: FormGroup;
  subRef$: Subscription;

  constructor(private modalH: SwitchService, private formBuilder: FormBuilder,
    private http: HttpClient, private router: Router ) 
    {
        this.formHotel = formBuilder.group({
          email: ['', Validators.required],
          userPassword: ['', Validators.required]
        });
    }

    closeModal()
    {
        this.modalH.$modal.emit(false);
    }
}
