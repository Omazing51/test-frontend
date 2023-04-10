import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    pass : new FormControl('', Validators.required)
  })

  ngOnInit(): void {}

  onLogin(form){
    console.log(form);
  }
  // login(form:NgForm)
  // {
  //   const email = form.value.email
  //   const pass = form.value.pass
  // }
  constructor(private modalS: SwitchService) { }

  closeModal()
  {
      this.modalS.$modal.emit(false);
  }

}
