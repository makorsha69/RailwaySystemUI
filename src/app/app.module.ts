import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { UserNavbarComponent } from './Components/user-dashboard/user-navbar/user-navbar.component';
import { AdminNavbarComponent } from './Components/admin-dashboard/admin-navbar/admin-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './Auth/auth.guard';
import { SaveSeatsComponent } from './Components/admin-dashboard/save-seats/save-seats.component';
import { SaveTrainsComponent } from './Components/admin-dashboard/save-trains/save-trains.component';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import{MatSelectModule}from'@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BookingComponent } from './Components/user-dashboard/booking/booking.component';
import { TransactionComponent } from './Components/user-dashboard/transaction/transaction.component';
import { TrainsComponent } from './Components/user-dashboard/trains/trains.component';
import { AddPassengerComponent } from './Components/add-passenger/add-passenger.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    FooterComponent,
    NavbarComponent,
    AboutUsComponent,
    ContactUsComponent,
    UserNavbarComponent,
    AdminNavbarComponent,
    SaveSeatsComponent,
    SaveTrainsComponent,
    AddPassengerComponent,
    BookingComponent,
    TransactionComponent,
    TrainsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot ([
      {path:'home', component:HomeComponent},
      {path:'signup', component:SignupComponent},
      {path:'login', component:LoginComponent},
      {path:'login/user/dashboard/trains', component:TrainsComponent,canActivate:[AuthGuard]},
      {path:'login/user/dashboard/add-passenger', component:AddPassengerComponent,canActivate:[AuthGuard]},
      {path:'login/user/dashboard/booking',component:BookingComponent,canActivate:[AuthGuard]},
      {path:'login/admin/dashboard', component:AdminDashboardComponent, canActivate:[AuthGuard]},
      {path:'login/user/dashboard', component:UserDashboardComponent, canActivate:[AuthGuard]},
      {path:'login/admin/dashboard/save-train', component:SaveTrainsComponent,canActivate:[AuthGuard]},
      {path:'login/admin/dashboard/save-seats', component:SaveSeatsComponent,canActivate:[AuthGuard]},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
     ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
