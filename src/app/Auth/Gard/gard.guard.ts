import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MainServicesService } from 'src/app/Services/main-services.service';

@Injectable({
  providedIn: 'root'
})
export class GardGuard implements CanActivate {
  constructor(private service: MainServicesService, private router :Router){}
  canActivate(){
    if(this.service.profilelock()){
      return true;
    }
    if(!this.service.profilelock()){
    this.router.navigate(['/login'])
    return false;}
  }
  
}
    