import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  /**
   *
   */
  ngOnInit(): void {}
  login(form:NgForm)
  {
    const email = form.value.email
    const pass = form.value.pass
  }
  constructor(private modalS: SwitchService) { }

  closeModal()
  {
      this.modalS.$modal.emit(false);
  }

}
