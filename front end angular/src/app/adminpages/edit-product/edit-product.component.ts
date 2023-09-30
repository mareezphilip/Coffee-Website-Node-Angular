import { Component ,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalserviceService } from 'src/app/services/globalservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  constructor(private service:GlobalserviceService , private router: Router,private toastr: ToastrService){
  }
  productid : any
  singleproductinfo={category:"" , title:"" , _id:"" , description:"" , price:0 , __v:0 ,images:""}
  products :any
  data :any
  categories =["tea" , "hot Coffee" , "ice coffee" , "fresh drinks" , "Frappuccino"]
  ngOnInit(){
    this.service.getallproducts().subscribe(res => {
      console.log(res)
      this.data=res
      this.products=this.data.data
     })
  }


  edit:boolean = true
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

  handledelete(i:any){
    let id =this.products[i]._id
    console.log(id)
    this.products.splice(i,1)
    this.service.Deleteproduct(id).subscribe(res => {
      console.log(res)
      this.toastr.success('', ' product deleted successfully');

    })
  }




  handleEdit(i:any){
    this.productid = this.products[i]._id
    console.log(this.productid)
    this.service.getproductinfo(this.productid).subscribe(res=>{
      console.log(res)
      this.singleproductinfo=res.data
      console.log(this.singleproductinfo)

    })
    this.edit=true
    
  }


  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0] ;
  }


  submitForm(form : NgForm ) {
   
      
      let formData=new FormData()
      
      formData.append('image',this.selectedImage )
      if(this.model.title=="") { this.model.title= this.singleproductinfo.title}
      formData.append('title',this.model.title )
      if(this.model.description==""){this.model.description=this.singleproductinfo.description}
      formData.append('description',this.model.description )
      if(this.model.category==""){this.model.category=this.singleproductinfo.category}
      formData.append('category',this.model.category )
      console.log(form)
      if(this.model.price==""){this.model.price= this.singleproductinfo.price.toString() }
      formData.append('price',this.model.price )
      
      this.service.editProduct( this.productid , formData).subscribe(res=>{
              this.result=res
              console.log(this.result)
      if(this.result.apiStatus) {
           console.log("trueeeee")
           this.toastr.success('', 'Edited successfully');
           window.location.reload()
      }
      
      })

  
      console.log(this.productid)
  }

  
}
