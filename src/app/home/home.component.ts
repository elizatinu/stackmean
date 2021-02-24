import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeForm= this.fb.group({
    username:[""],
    password:[""],
    amount:[]
  })
  constructor(private bankService:BankService, private router:Router, private fb:FormBuilder) { }
  ngOnInit(): void{

  }
  //onUsernameChange(event:any){
  //  this.username = event.target.value;
  //}
  //onPasswordChange(event:any){
  //  this.password= event.target.value;
  //}
  //onAmountChange(event:any){
  //  this.amount = parseInt(event.target.value);
  //}
  deposit(){
      //const username =this.homeForm.value.username;
      //const password =this.homeForm.value.password;
      const amount =parseInt(this.homeForm.value.amount);
      this.bankService.deposit(amount)
      .subscribe((data:any)=>{
        alert(data.message);
      });
  }
  withdrawal(){
    //const username =this.homeForm.value.username;
     // const password =this.homeForm.value.password;
      const amount =parseInt(this.homeForm.value.amount);
      this.bankService.withdrawal(amount)
      .subscribe((data:any)=>{
        alert(data.message);
      });
  }
}
