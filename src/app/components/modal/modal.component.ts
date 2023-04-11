import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SwitchService } from 'src/app/services/switch.service';
import {LoginI} from '../../models/login.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ResponseI } from 'src/app/models/response.interface';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  formLogin: FormGroup;
  subRef$?: Subscription;
  
  constructor(private modalS: SwitchService, private formBuilder: FormBuilder,
    private http: HttpClient, private router: Router ) 
    {
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
   this.subRef$ =  this.http.post<ResponseI>('https://localhost:7066/api/users/login',
    userLogin, { observe: 'response' }).subscribe(res => {
      const token = res.body?.response;
      console.log('token',res.body?.response)
      sessionStorage.setItem('token', token );
      this.closeModal();
      this.router.navigate(['/hotel']);
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
