import { Component, OnInit } from '@angular/core';
import { MainServicesService } from 'src/app/Services/main-services.service';

@Component({
  selector: 'app-dash-bord',
  templateUrl: './dash-bord.component.html',
  styleUrls: ['./dash-bord.component.css']
})
export class DashBordComponent implements OnInit {

  constructor( private service:MainServicesService) { }
  opened = true;
  over = "side"
  ngOnInit(): void {
    this.service.toggel = this.opened
  }

  toggel(){
    
  }


}
