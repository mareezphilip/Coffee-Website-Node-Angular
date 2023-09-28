import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterInterface } from 'src/app/interfaces/register-interface';
import { GlobalserviceService } from 'src/app/services/globalservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public service:GlobalserviceService) {
    
  }
  model : RegisterInterface =
  { 
    fName:"",
   lName:"",
    email:"",
    password:"",
    countryCode:"",
    phone:"",
    gender:"",
    dOfBirth:new Date() ,
    addresses :{
    addrType:'',
     addrDetails :''
     }
  }
  handleregister(form : NgForm){
    console.log(this.model)
    if(form.valid){
        this.service.AddUser(this.model).subscribe(res=>{
            console.log(res)
          })
        console.log("ana fel if")
    }
    else{
        console.log("ana fe el elsee ")
        console.log(form)
    }



}

  
  



  }


