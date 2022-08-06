import { Component, OnInit } from '@angular/core';
import { booking } from 'src/app/Models/Booking';
import { NavbarService } from 'src/app/navbar.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingModel:booking=new booking();
  trainData:any;
  pData:any;
  fare!:any;
  constructor(private shared:SharedService, private nav:NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();
    this.loadData();
  }

  loadData(){
    var shareData:any=localStorage.getItem('trainId');
    this.trainData=JSON.parse(shareData);
    var sharePass:any=localStorage.getItem('passengers');
    this.pData=JSON.parse(sharePass);
    
    this.shared.fareCal(this.trainData.TrainId,this.pData.Class,this.pData.PassengerId).subscribe((res)=>{
          this.fare=res;     
          console.log(res);
    });
  }
payNow(){
  localStorage.removeItem('passengers');
  localStorage.removeItem('trainId');
}
}
