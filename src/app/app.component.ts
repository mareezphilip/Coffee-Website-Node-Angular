import { Component ,OnInit } from '@angular/core';
import { GlobalserviceService } from './services/globalservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffeeApp';
  user:boolean = false
  
  
  constructor(private service:GlobalserviceService){
    console.log(service.userType)
    // if(service.userType=="user") { this.user = true}
    // else if (service.userType=="admin") {this.user=false}
  }
  
  ngOnInit(){
  
  }
  
}
