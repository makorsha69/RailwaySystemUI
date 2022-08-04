import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './Components/signup/signupmodel';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public userServices:User;
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
}
