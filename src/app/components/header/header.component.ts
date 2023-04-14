import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  public modalSwitch : any;
  IsAuthenticated = false;
  private subsAuth$: Subscription;
  constructor(private modalS:SwitchService, private router:Router, private securityService: SecurityService) 
  {
    this.IsAuthenticated = this.securityService.IsAuthorized;
    
    this.subsAuth$ = this.securityService.authChallenge$.subscribe(
      (isAuth) => 
      {
        this.IsAuthenticated = isAuth;
      });
  }
  ngOnInit()
  {
    this.modalS.$modal.subscribe((value=>{this.modalSwitch = value}));
  }

  show(): string{  
    return this.router.url;
  }

  cerrarSesion()
  {
    this.IsAuthenticated = false;
    this.router.navigate(['']);
  }

  openModal()
  {
      this.modalSwitch = true;
  }

  ngOnDestroy(): void {
    if(this.subsAuth$)
    {
       this.subsAuth$.unsubscribe();
    }
  }

}
