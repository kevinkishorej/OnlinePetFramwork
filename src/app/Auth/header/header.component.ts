import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MainServicesService } from 'src/app/Services/main-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service:MainServicesService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.service.logout()
    this.router.navigate(['/login'])
  }
}
