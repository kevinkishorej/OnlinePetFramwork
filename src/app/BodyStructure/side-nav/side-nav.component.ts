import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainServicesService } from 'src/app/Services/main-services.service';
import { UserProfile } from 'src/app/Services/UserProfile';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit ,OnDestroy{

  constructor(private service :MainServicesService, private Dialog:MatDialog,private snackbar:MatSnackBar) { }

  userData : UserProfile;
  userimage : any;
  modelSubcription:Subscription;
  Spinner = false;
  ngOnInit(): void {
    this.getProfile();
    this.modelSubcription = this.service.modelDataSubject.subscribe(resute=>{
      this.userData.name = resute.name;
      this.userData.email = resute.email;
      this.userData.location = resute.location;
      this.userData.profilename = resute.profilename;

    })
  }
  ngOnDestroy(){
    this.modelSubcription.unsubscribe();
  }
  getProfile(){      
    this.service.getProfile().subscribe((data:any)=>{  
      this.userData = data;
      this.userimage =  data.userimage;
      console.log(this.userData ) }
      );

  }
   
  filechoose(event:any){
  
  console.log(event)
  if(event.target.files.length === 1){
  this.Spinner = true; 
  this.userimage = event.target.files[0]
  const formdata = new FormData();
  formdata.append('userimage',this.userimage),
  formdata.append('_id',this.userData._id)
    this.service.postImage(formdata).subscribe(data=>{
     
      console.log(data) 
      this.service.getProfile().subscribe((data:any)=>{  
        this.userData = data;
        this.userimage =  data.userimage;
        console.log(this.userData )
        this.Spinner = false 
        })      
    })
  }
  if(event.target.files.length === 2){
    this.Spinner = false;
            this.snackbar.open('Error ', 'Select one Image', {
            duration: 3000,
            });
  }
  }
  popup = false;

  butt(userData){

    const dialogRef = this.Dialog.open(EditDialogComponent,{
      width: '480px',
      data: userData 
    });
    
  }


}
