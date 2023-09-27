import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalserviceService } from 'src/app/services/globalservice.service';


@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})

export class ShowproductComponent {

  constructor(private activate:ActivatedRoute , private service:GlobalserviceService ){}
  
  productid :any
  product :any
  quantity:number = 1
  ngOnInit(){
  this.activate.paramMap.subscribe(param=>{
    this.productid=param.get('productid')
    console.log(this.productid)
    this.service.getproductinfo(this.productid).subscribe(res=>{
      console.log(res)
      this.product =res.data
      
    })
  })
 
}

}
