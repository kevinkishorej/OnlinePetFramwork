import { HomeComponent } from './BodyStructure/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RegisterFormComponent } from './Auth/register-form/register-form.component';
import { LogInComponent } from './Auth/log-in/log-in.component';
import { DashBordComponent } from './BodyStructure/dash-bord/dash-bord.component';
import { PostedAdComponent } from './BodyStructure/posted-ad/posted-ad.component';
import { PostingAdComponent } from './BodyStructure/posting-ad/posting-ad.component';
import { ProductDetailsComponent } from './BodyStructure/product-details/product-details.component';
import { GardGuard } from './Auth/Gard/gard.guard';


const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'register',component:RegisterFormComponent},
  {path:'login',component:LogInComponent},
  
  {path:'productDetail/:name',component:ProductDetailsComponent},
  {path:'profile',component:DashBordComponent,canActivate:[GardGuard],
  children:[
    {path:'',component:PostedAdComponent,canActivate:[GardGuard]},
    {path:'post',component:PostingAdComponent,canActivate:[GardGuard]},
    {path:'userProductDetails',component:ProductDetailsComponent,canActivate:[GardGuard]},
  ]},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
