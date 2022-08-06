import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Train } from 'src/app/Models/Train';
import { NavbarService } from 'src/app/navbar.service';

import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-save-trains',
  templateUrl: './save-trains.component.html',
  styleUrls: ['./save-trains.component.css']
})
export class SaveTrainsComponent implements OnInit {
  formValue !: FormGroup;
  trainModelObj: Train = new Train();
  trainData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private shared:SharedService,private fb:FormBuilder,private nav:NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();
    
    this.formValue=this.fb.group({

      TrainId:[''],
      Name:[''],
      ArrivalTime:[''],
      DepartureTime: [''],
      ArrivalDate:[''],
      DepartureDate:[''],
      ArrivalStation:[''],
      DepartureStation:[''],
      Distance:[''],
    })
    this.getAllTrain();
  }


onEdit(row:any){
    this.showAdd=false;
    this.showUpdate=true;
    this.formValue.controls['TrainId'].setValue(row.TrainId)
    // this.formValue.controls['SeatId'].setValue(row.seatId);
    this.formValue.controls['Name'].setValue(row.Name);
    this.formValue.controls['ArrivalTime'].setValue(row.ArrivalTime);
    this.formValue.controls['DepartureTime'].setValue(row.DepartureTime);
    this.formValue.controls['ArrivalDate'].setValue(row.ArrivalDate);
    this.formValue.controls['DepartureDate'].setValue(row.DepartureDate);
    this.formValue.controls['ArrivalStation'].setValue(row.ArrivalStation);
    this.formValue.controls['DepartureStation'].setValue(row.DepartureStation);
    this.formValue.controls['Distance'].setValue(row.distance);
}
updateTrain(){
  this.trainModelObj.trainId=this.formValue.value.TrainId;
  this.trainModelObj.name=this.formValue.value.Name;
  this.trainModelObj.arrivalDate=this.formValue.value.ArrivalDate;
  this.trainModelObj.departureDate=this.formValue.value.DepartureDate;
  this.trainModelObj.departureTime=this.formValue.value.DepartureTime;
  this.trainModelObj.arrivalTime=this.formValue.value.ArrivalTime;
  this.trainModelObj.arrivalStation=this.formValue.value.ArrivalStation;
  this.trainModelObj.departureStation=this.formValue.value.DepartureStation;
  this.trainModelObj.distance=this.formValue.value.Distance;
  this.shared.updateTrain(this.trainModelObj).subscribe(res=>{
    alert("Updated successfully");
    let ref = document.getElementById("cancel")
    ref?.click();
    this.formValue.reset();
    this.getAllTrain();
  })
}

deleteTrain(id:number){
  if(confirm('Are you sure?')){
    this.shared.deleteTrain(id).subscribe(data=>{
      console.log(data);
      
    });
    location.reload();
  }
  
} 
clickAddTrain(){
  this.formValue.reset();
  this.showAdd=true;
  this.showUpdate=false;
}
postTrainDetails(){
  
  this.trainModelObj.name=this.formValue.value.Name;
  this.trainModelObj.arrivalDate=this.formValue.value.ArrivalDate;
  this.trainModelObj.departureDate=this.formValue.value.DepartureDate;
  this.trainModelObj.departureTime=this.formValue.value.DepartureTime;
  this.trainModelObj.arrivalTime=this.formValue.value.ArrivalTime;
  this.trainModelObj.arrivalStation=this.formValue.value.ArrivalStation;
  this.trainModelObj.departureStation=this.formValue.value.DepartureStation;
  this.trainModelObj.distance=this.formValue.value.Distance;
  this.shared.saveTrain(this.trainModelObj).subscribe(res=>{ 
    console.log(res),
    alert("Train added successfully");
    let ref = document.getElementById("cancel")
    ref?.click();
    this.formValue.reset();
    this.getAllTrain();
  },
  error=>{
    alert("Something is wrong");
  });
}
getAllTrain(){
  this.shared.getAllTrains().subscribe(res=>{
    this.trainData = res;
  })
}


}
