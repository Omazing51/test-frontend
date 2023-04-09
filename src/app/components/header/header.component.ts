import { Component } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public modalSwitch : any;

  /**
   *
   */
  constructor(private modalS:SwitchService) {}
  ngOnInit()
  {
    this.modalS.$modal.subscribe((value=>{this.modalSwitch = value}));
  }

  openModal()
  {
      this.modalSwitch = true;
  }

}
