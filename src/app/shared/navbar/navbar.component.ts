import { Component } from '@angular/core';
import { GlobalserviceService } from 'src/app/services/globalservice.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor( public service:GlobalserviceService , private toastr :ToastrService){}
  handlelogout(){
    this.service.isLogin = false
    
    this.service.logoutuser().subscribe(res=>{
      console.log(res)
      this.toastr.success("" , 'logged out')
    })
    localStorage.removeItem('token')
  }
}
