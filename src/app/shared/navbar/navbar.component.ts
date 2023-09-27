import { Component } from '@angular/core';
import { GlobalserviceService } from 'src/app/services/globalservice.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor( public service:GlobalserviceService){}
  handlelogout(){
    this.service.isLogin = false
    localStorage.removeItem('token')
    this.service.logoutuser().subscribe(res=>{
      console.log(res)
    })
  }
}
