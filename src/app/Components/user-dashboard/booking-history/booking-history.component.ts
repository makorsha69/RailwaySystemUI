import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { booking } from 'src/app/Models/Booking';
import { ticket } from 'src/app/Models/Ticket';
import { NavbarService } from 'src/app/navbar.service';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  totalLength:any;
  page:number=1
  userID: any;
  bModel:booking = new booking();
  booking!:any;
  tModel:ticket=new ticket();
  ticketData: any;
  showConfirm:boolean;
  
  constructor(private shared:SharedService,private nav:NavbarService,private router:Router) { }

  ngOnInit(): void {
    this.nav.hide();
    this.getBookingHistory();
  }
  
  getBookingHistory(){
    let user:any=localStorage.getItem("userId");
    this.userID=JSON.parse(user);
    
    this.shared.bookingHistory(this.userID).subscribe(res=>{
      this.booking=res;
      this.totalLength=res.length;
     
      console.log(res);
    });
  }
  ShowConfirm(){
    if(this.booking.Status=="CONFIRM"){
      this.showConfirm=true;
    }
  }
  GetTickect(pid:number,bid:number,tid:number){
    this.shared.getTicket(pid,bid,tid).subscribe((res)=>{
      console.log(res);
      console.log(res[0].Status);
      this.ticketData=res;
    
      if(res[0].Status==='Pending' || res[0].Status==='CANCELLED'){
        alert("No ticket available");
      }
      else{
        this.router.navigateByUrl('/login/user/dashboard/get-ticket');
        
      }
    localStorage.setItem('ticket',JSON.stringify(res));
   
  });
  
  }
 
  deleteBooking(id:number,tid:number){
    this.shared.DelbookingHistory(id,tid).subscribe(data=>{
      if(data.Status==='CANCELLED'){
        alert("Already Cancelled");
      }
      else{
        alert("Are you sure?")
      }
      console.log(data);
      
    });
     location.reload();
  
}
}