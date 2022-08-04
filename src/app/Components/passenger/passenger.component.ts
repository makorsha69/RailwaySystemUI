import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  AddPassenger = new FormGroup({
    name : new FormControl('',[Validators.required , Validators.email]),
    // password : new FormControl('',Validators.required)
  });
  get name() {
    return this.AddPassenger.get('name');
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    
  }

}
