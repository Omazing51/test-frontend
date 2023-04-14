import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {

  constructor(private router: Router) {}

   openMenuH(){
    this.router.navigate(['/hotel']);
   }

   openMenuHa(){
    this.router.navigate(['/room']);
   }

   openMenuR(){
    this.router.navigate(['/booking']);
   }

   openMenuHi(){
    this.router.navigate(['/hotelimage']);
   }

}
