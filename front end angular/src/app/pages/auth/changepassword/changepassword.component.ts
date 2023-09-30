import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Resetpasswordinterface } from 'src/app/interfaces/resetpasswordinterface';
import { GlobalserviceService } from 'src/app/services/globalservice.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {

  result:any=""
  constructor(private service:GlobalserviceService ,private router : Router  ){


  }
  model : Resetpasswordinterface =
  {
  
    password:""
  }
  handlesubmit(form:NgForm){
  if(form.valid){
  
    console.log("annnnnnaaaa valid")
    this.service.changepassword(this.model).subscribe(res=>{
      this.result=res
            console.log(this.result)
      if(this.result.apiStatus) {
       console.log("trueeee")
        
       }

    })

  }
  }
}
