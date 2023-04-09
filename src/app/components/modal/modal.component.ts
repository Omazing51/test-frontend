import { Component } from '@angular/core';
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
  constructor(private modalS: SwitchService) { }

  closeModal()
  {
      this.modalS.$modal.emit(false);
  }

}
