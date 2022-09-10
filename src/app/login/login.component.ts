import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user="";
  pwd="";

  ruser="manwin";
  rpwd="manwin123";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  checklogin(){
    if(this.user==""){
      alert("Username can't be empty");
    }else if(this.pwd==""){
      alert("Enter the password");
    }else if(this.user==this.ruser && this.pwd==this.rpwd){
      this.router.navigateByUrl("/dashboard");
    }else{
      alert("Entered credentials are Invalid");
    }
  }

}
