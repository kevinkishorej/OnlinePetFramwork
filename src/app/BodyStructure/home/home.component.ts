import { Component, OnInit } from '@angular/core';
import { UserProduct } from 'src/app/Services/UserProduct';
import { MainServicesService } from 'src/app/Services/main-services.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productinfo: UserProduct[];

  
  constructor(private service:MainServicesService, private router:Router) { }

  options = ['Chennai','Coimbatore','Madurai','Salem','Tiruchi','Tirupur']
  Location : any;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit(): void {
    this.service.getallAdd().subscribe((data:any)=>{
      this.productinfo = data
    })
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value:string):string[]{
    const filterValue = value.toLowerCase();
  
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  
   }

//filter by location .....

Filter(event){
  if(this.Location!=""){
    console.log(event)
    this.productinfo = this.productinfo.filter(res=>{
      return res.location.toLowerCase().match(this.Location.toLocaleLowerCase());
      
    })
  }else if(this.Location==""){
    this.ngOnInit();
  }
}   

search(){

    this.productinfo = this.productinfo.filter(res=>{
      return res.location.toLowerCase().match(this.Location.toLocaleLowerCase());      
    }) 
}

clear(){
  this.Location = "";
  this.ngOnInit();
}

//cards 
  card(titles){    
    var id = titles._id
    this.router.navigate(['/productDetail',id]);
    // this.service.getProductDetail(id).subscribe(date=>{
    //   console.log(date)
    //   this.service.test(date)
    // })
    // console.log(titles._id)
  }

}
