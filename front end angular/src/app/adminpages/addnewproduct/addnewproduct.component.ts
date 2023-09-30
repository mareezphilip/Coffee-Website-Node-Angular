import { Component } from '@angular/core';
import { GlobalserviceService } from 'src/app/services/globalservice.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.component.html',
  styleUrls: ['./addnewproduct.component.css']
})
export class AddnewproductComponent {
  constructor(private service:GlobalserviceService , private toastr: ToastrService){
  }
  categories =["tea" , "hot Coffee" , "ice coffee" , "fresh drinks" , "Frappuccino"]
  result:any
  selectedImage: any  = null;
  model =
  { 
   
     title:"",
     price:"",
     images:"",
     description:"",
     category:""

  }

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0] ;
  }


  submitForm(form : NgForm ) {
   
    if(form.valid){
      console.log("ana valiid")
      let formData=new FormData()
    
      formData.append('image',this.selectedImage )
      formData.append('title',this.model.title )
      formData.append('description',this.model.description )
      formData.append('category',this.model.category )
      console.log(form)
      formData.append('price',this.model.price )
      
      this.service.addproduct(formData).subscribe(res=>{
              this.result=res
              console.log(this.result)
      if(this.result.apiStatus) {
           console.log("trueeeee")
           this.toastr.success('', 'Product added successfully');
      }
      
      })

  
    }
  }

  
}
