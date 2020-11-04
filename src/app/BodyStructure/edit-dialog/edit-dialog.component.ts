import { Component, OnInit ,Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, Validators } from '@angular/forms';
import { MainServicesService } from 'src/app/Services/main-services.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb :FormBuilder,private service:MainServicesService,
  private snackBar:MatSnackBar, private Dialog:MatDialog, public dialogRef: MatDialogRef<EditDialogComponent>) { }

  ngOnInit(): void {
  }

  userForm = this.fb.group({
    _id:[this.data._id],
    name:['',Validators.required],
    email:['',Validators.required],
    profilename:['',Validators.required],
    location:['',Validators.required],
    });

  public name = this.data.name;
  public email = this.data.email
  public profilename = this.data.profilename;
  public location = this.data.location;

  USERFORM = '';

  getProfile(){
    this.service.getProfile().subscribe((data:any)=>{
    console.log(data) }
    );

  }

  onSubmit(){
    var USERFORM = this.userForm.value
    this.service.updatemethod(USERFORM).subscribe
    (data=>{
    console.log(data) 
    this.snackBar.open('Profile Edited!', 'Sucessfully', {
      duration: 2000,
    });
    this.service.getProfile().subscribe((data:any)=>{
      this.service.modelDataSubject.next(data);
    }
    );
    
    // this.getProfile()
})
  }

  get(){
    this.Dialog.closeAll();
  }

  

}
