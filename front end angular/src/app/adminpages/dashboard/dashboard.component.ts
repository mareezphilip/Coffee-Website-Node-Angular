import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
   dashboard:string=" "

   addproduct:boolean=false
   editproduct:boolean=true
   allusers:boolean=false
   addadmin:boolean=false

   addproducthandle(){
    this.addproduct=true
    this.editproduct=false
    this.allusers=false
    this.addadmin=false
   }

   editproducthandle(){
    this.addproduct=false
    this.editproduct=true
    this.allusers=false
    this.addadmin=false
   }
}
