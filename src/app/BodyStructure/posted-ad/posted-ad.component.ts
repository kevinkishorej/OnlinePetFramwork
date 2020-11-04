import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MainServicesService } from 'src/app/Services/main-services.service';
import { UserProfile } from 'src/app/Services/UserProfile';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-posted-ad',
  templateUrl: './posted-ad.component.html',
  styleUrls: ['./posted-ad.component.css']
})
export class PostedAdComponent implements OnInit {

  constructor(private router:Router ,private service:MainServicesService, ) { }

  userData : UserProfile;
  ngOnInit(): void {
    this.service.getProfile().subscribe((data:any)=>{ 
      this.userData = data.productinfo
      console.log(this.userData ) }
      );
  }

  post(){
    this.router.navigate(['/profile/post'])
  }

  card(titles){    
    var id = titles._id
    this.router.navigate(['/productDetail',id]);

    // this.service.getProductDetail(id).subscribe(date=>{
    //   console.log(date)
    //  this.service.test(date)
    // })
    // console.log(titles._id)
  }

  toggel(){
    this.service.toggel = true;
  }

  delet(titles){

  //  alert("This advertisment will be remove from this website")
  //  this.service.Deletemethod(titles._id).subscribe(data=>{
  //   console.log(data)
  //   this.ngOnInit();
  //  })        
  Swal.fire({
    title: 'Are you sure?',
    text: 'Advertisment need to remove',
    timer: 4000,
    imageWidth: 10,
    imageHeight: 10,
    showCancelButton: true,
    confirmButtonText: 'Delete',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.value) {
     this.service.Deletemethod(titles._id).subscribe(data=>{
   this.ngOnInit();
   }) 
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
  
  }
}
           