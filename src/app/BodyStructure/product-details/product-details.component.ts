import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainServicesService } from 'src/app/Services/main-services.service';
import { UserProduct } from 'src/app/Services/UserProduct';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  some:UserProduct
  // modelProdectDate:Subscription

  constructor(private service:MainServicesService, private carousel :NgbCarouselConfig, private activerout:ActivatedRoute) {
    carousel.interval=5000;
   }

   image :any;
   Error :string;
   name :string;

  ngOnInit(): void {

    this.name = this.activerout.snapshot.paramMap.get('name');
    console.log(this.name)
    const id = this.name
    this.service.getProductDetailById(id).subscribe((data:any)=>{
      console.log(data)
      this.some = data
      this.image = data.image1
      this.Error= data.Error
      console.log(this.Error)
    })
  //    this.modelProdectDate = this.service.ProdectDetaile$.subscribe((data:any)=>{
  //   this.some = data
  //   this.image = data.image1
  //   console.log( this.some)
  // })
  } 


}
