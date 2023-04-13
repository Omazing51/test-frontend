import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private modalS:SwitchService, private router:Router) {}
  ngOnInit()
  {
    this.modalS.$modal.subscribe((value=>{this.modalSwitch = value}));
  }

  show(): string{  
    return this.router.url;
  }

  cerrarSesion()
  {
    this.router.navigate(['']);
  }

  openModal()
  {
      this.modalSwitch = true;
  }

}
