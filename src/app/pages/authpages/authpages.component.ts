import { Component } from '@angular/core';

@Component({
  selector: 'app-authpages',
  templateUrl: './authpages.component.html',
  styleUrls: ['./authpages.component.css']
})
export class AuthpagesComponent {
login:boolean=true
register:boolean=false
reset:boolean=false

  showlogin(){

this.login=true
this.register=false
this.reset=false


  }
  showregister(){
    this.login=false
    this.register=true
    this.reset=false
    
    
      }
      showresetpass(){
        this.login=false
        this.register=false
        this.reset=true
        
          }
}
