import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http:HttpClient){

  }

  //accountDetails :any = {
  //  userone: { acno: 1000, name: "sajay", bal: 10000, username: "userone", password: "testuser", history: []
  // },
   // usertwo: { acno: 1001, name: "sajay", bal: 20000, username: "usertwo", password: "testuser1",  history: []},
   // userthree: { acno: 1002, name: "sajay", bal: 25000, username: "userthree", password: "testuser2", history: []}
  //};
  authenticateUser=(uname:string,pwd:string)=>{
    //console.log(uname,pwd);
    return this.http.post(apiUrl+"/login",{
      "username":uname,
      "password":pwd
    });
  }

  generateHeader = ()=>{
    let token = localStorage.getItem("token");
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", "Bearer "+token)
    return headers;
  }
  deposit = (amt:Number) => {    
    return this.http.post(apiUrl+"/deposit",{
      "amount":amt
},{
  headers:this.generateHeader()
    });
    //let user=this.authenticateUser(uname,pwd)
    //let dataset = this.accountDetails;
    //if(user==1){
    //    dataset[uname].bal += amt;
    //    dataset[uname].history.push({
    //    amount:amt, typeOfTransaction:'credit'
    //    });
    //       alert("your account credited with amount" + amt + " avl balance=" + dataset[uname].bal)
    //}
    //else if(user==0){
    //    alert("incorrect password")
    //}
    //else if(user==-1){
    //    alert("no user exist with provided username")
    //}
  }
  withdrawal = (amt:number) => {    
    return this.http.post(apiUrl+"/withdrawal",{
      "amount":amt
},{
  headers:this.generateHeader()
    });
    //let user=this.authenticateUser(uname,pwd)
    //let dataset = this.accountDetails;
  //  if(user==1){
  //    if(dataset[uname].balance<amt){
  //      alert("Insufficient Balance");
  //    }
  //    else{
  //      dataset[uname].bal -= amt;
  //      dataset[uname].history.push({
  //        amount:amt, typeOfTransaction:'debit'
  //        });
  //         alert("your account debited with amount" + amt + " avl balance=" + dataset[uname].bal)
  //  }
  //}
  //  else if(user==0){
  //      alert("incorrect password")
  //  }
  //  else if(user==-1){
  //      alert("no user exist with provided username")
  //  }
  }
  getHistory(){
    return this.http.get(apiUrl+"/history",{
  headers:this.generateHeader()
    });
    //let dataset = this.accountDetails;
    //return dataset["userone"].history;
  }
}

