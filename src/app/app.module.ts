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
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot ([
      {path:'signup', component:SignupComponent},
      {path:'login', component:LoginComponent},
      {path:'login/admin/dashboard', component:AdminDashboardComponent, canActivate:[AuthGuard]},
      {path:'login/user/dashboard', component:UserDashboardComponent, canActivate:[AuthGuard]},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
     ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
