import { Component, OnInit } from '@angular/core';
import { booking } from 'src/app/Models/Booking';
import { NavbarService } from 'src/app/navbar.service';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  userID: any;
  bModel:booking = new booking();
  booking!:any;
  constructor(private shared:SharedService,private nav:NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();
    this.getBookingHistory();
  }

  getBookingHistory(){
    let user:any=localStorage.getItem("userId");
    this.userID=JSON.parse(user);
    
    this.shared.bookingHistory(this.userID).subscribe(res=>{
      this.booking=res;
      console.log(res);
    });
  }
  deleteBooking(id:number){
    if(confirm('Are you sure?')){
      console.log(id);
      this.shared.DelbookingHistory(id).subscribe(data=>{
        console.log(data);
        
      });
      location.reload();
    }
  }
}