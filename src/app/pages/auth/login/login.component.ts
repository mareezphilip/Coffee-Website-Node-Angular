import { Component } from '@angular/core';
import { Logininterface } from 'src/app/interfaces/logininterface';
import { NgForm } from '@angular/forms';
import { GlobalserviceService } from 'src/app/services/globalservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  result:any
  constructor(private service:GlobalserviceService ,private router : Router ){


  }
  model : Logininterface =
  {
    email:"",
    password:""
  }
  handlesubmit(form:NgForm){
  if(form.valid){
    console.log("annnnnnaaaa valid")
    this.service.loginUser(this.model).subscribe(res=>{
      this.result=res
            console.log(this.result)
      if(this.result.apiStatus) {
        localStorage.setItem('token' , this.result.data.token)
        localStorage.setItem('type' , this.result.data.userData.userType)
          this.service.userType = this.result.data.userData.userType
        
        this.service.isLogin = true
        this.router.navigateByUrl('')
       }

    })

  }


}

}
