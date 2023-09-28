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
  loading = true
  p :any = "mareeeeeez"
  ngOnInit(){
  this.activate.paramMap.subscribe(param=>{
    this.category=param.get('category')
    console.log(this.category)
    this.service.getproductsbycategory(this.category).subscribe(res=>{
      console.log(res)
      this.products =res.data
      
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
}
