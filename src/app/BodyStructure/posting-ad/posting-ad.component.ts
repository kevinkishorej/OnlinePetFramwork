import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/Services/UserProfile';
import { MainServicesService } from 'src/app/Services/main-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-posting-ad',
  templateUrl: './posting-ad.component.html',
  styleUrls: ['./posting-ad.component.css']
})
export class PostingAdComponent implements OnInit {
  userForm = new  FormGroup({});
  title = "";
  Price = "";
  breed = "";
  petage = "";
  location = "";
  address = "";
  phonenumber = "";
  negotiable = "";
  myControl = new FormControl();
  userData:UserProfile;


  //product images list.....
  productimage1:any;
  productimage2:any;
  productimage3:any;


  constructor(private service:MainServicesService, private router:Router, private snackbar:MatSnackBar) { }
 
  options = ['Chennai','Coimbatore','Madurai','Salem','Tiruchi','Tirupur']
  nego = ['Yes','No']
  filteredOptions: Observable<string[]>;


  ngOnInit(): void {
    this.service.getProfile().subscribe((data:any)=>{
      console.log(data)
      this.userData = data});

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }


 private _filter(value:string):string[]{
  const filterValue = value.toLowerCase();

  return this.options.filter(option => option.toLowerCase().includes(filterValue));

 }

 ///url list ....
 url1= "./assets/upload3.png";
 url2= "./assets/upload3.png";
 url3= "./assets/upload3.png";
 
Spinner = false;



  choose(event){
    console.log(event)
    if(event.target.files){
    var render = new FileReader();
      render.readAsDataURL(event.target.files[0])
      render.onload=(event:any)=>{
        this.url1 = event.target.result;
      }
      this.productimage1 = event.target.files[0]
    }
  }

  choose2(event){
    console.log(event)
    if(event.target.files){
    var render = new FileReader();
      render.readAsDataURL(event.target.files[0])
      render.onload=(event:any)=>{
        this.url2 = event.target.result;
      }
      this.productimage2 = event.target.files[0]
    }
  }

  choose3(event){
    console.log(event)
    if(event.target.files){
    var render = new FileReader();
      render.readAsDataURL(event.target.files[0])
      render.onload=(event:any)=>{
        this.url3 = event.target.result;
      }
      this.productimage3 = event.target.files[0]
    }
  }



///posting function....
  submite(){
    console.log(this.title + this.Price +this.petage+this.productimage1 + this.breed+this.location+this.address+this.phonenumber)
    console.log([this.productimage1]+'example')
    this.Spinner = true;
    const formdata = new FormData();
    formdata.append('image1',this.productimage1),
    formdata.append('image1',this.productimage2),
    formdata.append('image1',this.productimage3),
    formdata.append('title',this.title),
    formdata.append('price',this.Price),
    formdata.append('breed',this.breed),
    formdata.append('petage',this.petage),
    formdata.append('location',this.location),
    formdata.append('address',this.address),
    formdata.append('phonenumber',this.phonenumber),
    formdata.append('negotiable',this.negotiable),
    formdata.append('_id',this.userData._id)
    console.log(formdata+'info')
    this.service.productpost(formdata).subscribe(data=>{
      console.log(data)
      this.Spinner = false;
      this.router.navigate(['/Home'])
              this.snackbar.open('Sucessfully ', 'Your Add has been post ', {
              duration: 3000,
              }); 
  })
}
}
