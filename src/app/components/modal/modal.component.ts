import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SwitchService } from 'src/app/services/switch.service';
import {LoginI} from '../../models/login.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ResponseI } from 'src/app/models/response.interface';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { SecurityService } from 'src/app/services/security.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  formLogin: FormGroup;
  subRef$: Subscription;
  
  constructor(private modalS: SwitchService, private formBuilder: FormBuilder,
    private dataService: DataService, private securityService: SecurityService, private router: Router ) 
    {
      this.securityService.LogOff();

        this.formLogin = formBuilder.group({
          email: ['', Validators.required],
          userPassword: ['', Validators.required]
        });
    }

  ngOnInit(): void {}

  Login()
  {
    const userLogin: LoginI = {
      email: this.formLogin.value.email,
      userPassword: this.formLogin.value.userPassword,
    };

    const url = 'https://localhost:7066/api/users/login';
   this.subRef$ =  this.dataService.post<ResponseI>(url,
    userLogin).subscribe(res => {
      const token = res.body.token;
      this.securityService.SetAuthData(token);
      this.closeModal();
      this.router.navigate(['/options']);
    }, err=> {
      console.log("Error en el login", err);
    });
  }
 
 ngOnDestroy(): void {
   if(this.subRef$){
    this.subRef$.unsubscribe();
   }
 }

  closeModal()
  {
      this.modalS.$modal.emit(false);
  }

}
