import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './Components/signup/signupmodel';
import { passenger } from './Models/Passenger';
import { Seats } from './Models/Seat';
import { Train } from './Models/Train';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public userServices:User;
  public TrainService:Train;
  readonly APIUrl ="https://localhost:44389/api"
  constructor(private http:HttpClient ) { }

  SaveUser(val:any){
    console.log(val);
    return this.http.post<any>(this.APIUrl+'/User/SaveUser',val)
  }
  Login(formData: any){
    console.log(formData);
    return this.http.post<User>(this.APIUrl+'/User/login',formData)
  }
  GetUserbyEmail(email:any){
    return this.http.get<User>(this.APIUrl+'/User/GetUserbyEmail?Email=')
  }
  getAllUserDetails():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/User/GetAllUser()')
    }
  EmailService(name:any,reciever:any){
   return this.http.get<any[]>(this.APIUrl+'/User/EmailService?name='+name+'&reciever='+reciever)
  }
  getAllTrains():Observable<Train>{
    return this.http.get<Train>(this.APIUrl+'/Train/GetAllTrains');
  }
   saveTrain(val:any){
    return this.http.post<Train>(this.APIUrl+'/Train/SaveTrain',val);
  }
  deleteTrain(id:number){
    return this.http.delete<Train>(this.APIUrl+'/Train/DeleteTrain?TrainId='+id);
  }
  updateTrain(data:any){
    return this.http.put<any>(this.APIUrl+'/Train/UpdateTrain',data);
  }
  SearchTrain(arr:any,dept:any,date:any){
    return this.http.get<Train>(this.APIUrl+'/Train/SearchTrainsSeat2?ArrivalStation='+arr+'&DepartureStation='+dept+'&date='+date);
  }
  getTrainbyId(id:number){
    return this.http.get<Train>(this.APIUrl+'/Train/GetTrain?TrainId='+id)
  }
  GetSeatById(id:number){
    return this.http.get<Seats>(this.APIUrl+'/Seat/GetSeat?SeatId='+id);
  }

  getAllSeats():Observable<Seats>{
    return this.http.get<Seats>(this.APIUrl+'/Seat/GetAllSeats()');
  }
  updateSeats(id:number,data:any){
    return this.http.put<any>(this.APIUrl+'/Seat/UpdateSeat?SeatId='+id,data);
  }

  addPassenger(val:any){
    return this.http.post<passenger>(this.APIUrl+'/Passenger/AddPassenger',val);
  }
  fareCal(tid:number,val:any,pid:number,uid:number){
    return this.http.get<any>(this.APIUrl+'/Booking/CalculateFare?TrainId='+tid+'&Class='+val+'&PassengerId='+pid+'&UserId='+uid);
  }
  getUserProfile(){
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    console.log(tokenHeader);
    return this.http.get(this.APIUrl+'/User/GetUserProfile', {headers : tokenHeader});
  }
  bookingHistory(uid:number){
    return this.http.get<any>(this.APIUrl+'/Booking/GetBookingHistory?UserId='+uid);
  }
  DelbookingHistory(bid:number){
  return this.http.delete<any>(this.APIUrl+'/Booking/DeleteBooking?BookingId='+bid);
  }
  saveSeat(val:any){
    return this.http.post<Seats>(this.APIUrl+'/Seat/SaveSeat',val);
  }
  report(tid:number){
    return this.http.get<any>(this.APIUrl+'/Passenger/GetReport?TrainId='+tid);
  }
  GetBookingId(pid:number){
    return this.http.get<any>(this.APIUrl+'/Booking/GetBookingId?PassengerId='+pid);
  }
  confirmBooking(bid:any){
    return this.http.get<any>(this.APIUrl+'/Booking/ConfirmBooking?BookingId='+bid);
  }
  getBookingbyId(bid:number){
    return this.http.get<any>(this.APIUrl+'/Booking/GetBooking?BookingId='+bid);
  }
}
