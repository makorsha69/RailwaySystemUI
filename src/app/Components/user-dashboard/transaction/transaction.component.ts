import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  formValue!:FormGroup;
  TransactionForm = new FormGroup({
    number : new FormControl('', [Validators.required, Validators.maxLength(16),Validators.minLength(13)]),
    cvv : new FormControl('',[Validators.required , Validators.maxLength(3),Validators.minLength(3)]),
    });
    get number() {
      return this.TransactionForm.get('number');
    }
    get cvv() {
      return this.TransactionForm.get('cvv');
    }
 

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
  

}
}
