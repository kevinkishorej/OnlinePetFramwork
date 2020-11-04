import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MainServicesService } from 'src/app/Services/main-services.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  constructor(private router:Router, private fb :FormBuilder, private service:MainServicesService,
    private snackbar:MatSnackBar) { }
  userForm = this.fb.group({
    
    profilename:['',Validators.required],
    password:['',Validators.required],
    
  });
  USERFORM = "";  
  ngOnInit(): void {
  }
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
   
  onSubmit(){
    var USERFORM = this.userForm.value;
    console.log(USERFORM)
    this.service.login(USERFORM).subscribe((data:any)=>{
      console.log(data.userinfo);
      if(data.success){
        console.log(data.token)
        this.router.navigate(['/profile'])
        this.service.tokenStorage(data.token);
        this.snackbar.open('Hi '+data.userinfo, 'Sucessfully Loged In', {
          duration: 3000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition, 
        })
      }
      else{   
        console.log(data)
        this.snackbar.open("Message : ",data.message, {
          duration: 3000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          }); 
      }
          
    })
  }


}
