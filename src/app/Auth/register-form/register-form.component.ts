import { UserProduct } from 'src/app/Services/UserProduct';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MainServicesService } from 'src/app/Services/main-services.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private router:Router, private fb :FormBuilder ,private service:MainServicesService,
    private snackbar:MatSnackBar) { }
  userForm = this.fb.group({
    
    name:['',Validators.required],
    email:['',Validators.required],
    profilename:['',Validators.required],
    password:['',Validators.required],
    conpass:['',Validators.required],
  });
  USERFORM = ""; 

  ngOnInit(): void {
  }
   
  onSubmit(){
    var confirm = this.userForm.value.conpass;
    var password = this.userForm.value.password;

    if(confirm != password){
      this.snackbar.open( "Hi", 'Confirm password is Wrong', {
        duration: 3000,
        });

    }else if(confirm == password){

      var USERFORM = this.userForm.value;
      console.log(USERFORM)
      this.service.createProfile(USERFORM).subscribe((data:any)=>{
          this.router.navigate(['/login'])
          this.snackbar.open('Hi '+ data.profilename, 'Sucessfully Register your Details', {
          duration: 3000,
          }); 
      })
    }
   
  }


}
