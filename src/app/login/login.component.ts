import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  test="hello world";
//username="";
//password="";
loginForm= this.fb.group({
  username:["",[Validators.required]],
  password:["",[Validators.required, Validators.minLength(8)]],
  //password:["",[Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?!@$%^&*-]).{8,}$")]],
})
constructor(private router:Router, private bankService:BankService, private fb:FormBuilder){
  }
  //onUsernameChange(event:any){
  // this.username = event.target.value;
  // }
  //onPasswordChange(event:any){
  //  this.password= event.target.value;
  //}
  login(){
    if(this.loginForm.valid==false){
      console.log(this.loginForm.get('password')?.errors)
      //console.log(this.loginForm.controls.username.errors)
      alert("invalid form")
    }
    else{
    const username =this.loginForm.value.username;
    const password =this.loginForm.value.password;
    this.bankService.authenticateUser(username, password)
    .subscribe((data:any)=>{
      alert(data.message);
      localStorage.setItem("token",data.token);
           //console.log(data);
      this.router.navigateByUrl("/home");
    }, (err)=>{
      alert(err.error.message);
    })
    //if(us==1){
    //  alert("login successful")
    //  this.router.navigateByUrl("/home");
    //}

    //else if(us==0){
    //  alert("incorrect password")
    //}

    //else if(us==-1){
    //  alert("no user exist with provided username")
    //}

  }
}
}
