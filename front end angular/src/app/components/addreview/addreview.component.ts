
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Addreviewinterface } from 'src/app/interfaces/addreviewinterface';
import { GlobalserviceService } from 'src/app/services/globalservice.service';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent {
  constructor(public service:GlobalserviceService, private router : Router) {
    
  }
  result:any
 
  model : Addreviewinterface =
  { 
    reviewDescription:"",
    rate:""

  }
  submitForm(form : NgForm) {
    
    if(form.valid){
      this.service.addreview(this.model).subscribe(res=>{
          console.log(res)
          window.location.reload()
        })
      console.log("ana fel if")
  }
  else{
      console.log("ana fe el elsee ")
      console.log(form)
  }
  }
}
