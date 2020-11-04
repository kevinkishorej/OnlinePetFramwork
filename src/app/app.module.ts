import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Auth/header/header.component';
import { FooterComponent } from './Auth/footer/footer.component';
import { LogInComponent } from './Auth/log-in/log-in.component';
import { RegisterFormComponent } from './Auth/register-form/register-form.component';
import { SideNavComponent } from './BodyStructure/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HomeComponent } from './BodyStructure/home/home.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { FormsModule ,ReactiveFormsModule  } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashBordComponent } from './BodyStructure/dash-bord/dash-bord.component';
import { UserProfile } from './Services/UserProfile';
import { MainServicesService } from './Services/main-services.service';
import {MatDialogModule} from '@angular/material/dialog';
import { EditDialogComponent } from './BodyStructure/edit-dialog/edit-dialog.component';
import { PostedAdComponent } from './BodyStructure/posted-ad/posted-ad.component';
import { PostingAdComponent } from './BodyStructure/posting-ad/posting-ad.component';
import { FlexLayoutModule }from '@angular/flex-layout';
import { ProductDetailsComponent } from './BodyStructure/product-details/product-details.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Filterpipe, ReversePipe } from './pipes/reverse.pipe';
import {MatTableModule} from '@angular/material/table';
import { StickyHeaderModule, NavbarModule, MDBBootstrapModule } from 'angular-bootstrap-md'
import { LocationStrategy,HashLocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogInComponent,
    RegisterFormComponent,
    SideNavComponent,
    HomeComponent,
    DashBordComponent,
    EditDialogComponent,
    PostedAdComponent,
    PostingAdComponent,
    ProductDetailsComponent,
    ReversePipe,
    Filterpipe
  ],
  
  entryComponents:[EditDialogComponent],

  imports: [
    BrowserModule,MatButtonModule,MatButtonToggleModule,MatInputModule,FlexLayoutModule,StickyHeaderModule,
    AppRoutingModule,MatToolbarModule,HttpClientModule,MatSidenavModule,MatAutocompleteModule,
    BrowserAnimationsModule,MatSnackBarModule,FormsModule,MatDialogModule,MatTableModule,
    NgbModule,MatIconModule,MatCardModule,ReactiveFormsModule,MatGridListModule, NavbarModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [{provide:LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
