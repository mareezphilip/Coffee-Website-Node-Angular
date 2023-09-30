import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { GlobalserviceService } from 'src/app/services/globalservice.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

 
  constructor(private activate:ActivatedRoute , private service:GlobalserviceService ,private router: Router ){}
  category : any =""
  products :any
  searchinput =""
  tempproduct :any
  loading = true
  p :any = "mareeeeeez"
  ngOnInit(){
  this.activate.paramMap.subscribe(param=>{
    this.category=param.get('category')
    console.log(this.category)
    this.service.getproductsbycategory(this.category).subscribe(res=>{
      console.log(res)
      this.products =res.data
      this.tempproduct=res.data
      
    }
     , (error)=>{
      this.router.navigateByUrl("error")
      console.log(error)
     },
     ()=>{
         this.loading=false
     }
    )

  })
 

}

search(){
  console.log(this.searchinput)
  
  this.products = this.products.filter((p:any) => p.title.includes(this.searchinput)) 
  
  if(this.products.length == 0 ) { this.products =[]}
  if(this.searchinput == "") {this.products = this.tempproduct}
  console.log(this.products)
}
}
