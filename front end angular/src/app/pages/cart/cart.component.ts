import { Component , OnInit} from '@angular/core';
import { GlobalserviceService } from 'src/app/services/globalservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 constructor(private service:GlobalserviceService){
 }

 usercart:any
 imgs :any = []
 cartarr:any =[]
 totalprice :number =0

 ngOnInit(){
  this.service.getusercart().subscribe(res=>{
    
    this.usercart = res

    console.log(this.usercart.data.products)


    this.usercart.data.products.forEach( (p :any ) => {
      this.service.getproductinfo(p.productid).subscribe(product=>{
          let obj = {"img":product.data.images , "title":product.data.title , "quantity": p.quantity , "price":product.data.price , "id" :p.productid}
          this.cartarr.push(obj)
          console.log(this.cartarr)
          this.calctotalprice()
      })

    })
    
    
    
  })
 
  console.log("hiiiiiiiii" )
 }

 calctotalprice(){
  
  console.log("ana fel calc")
  console.log(this.cartarr)
  // for(let i = 0 ; i<this.cartarr ; i++){
  //   console.log(this.cartarr[i])
  // }
  
  this.cartarr.forEach( (cart: any)=>{
     this.totalprice = this.totalprice + cart.price*cart.quantity
     console.log("ana hnaa ")
     console.log(this.totalprice)
  })

 }

 handledelete(i :any){
  console.log(i)
  let id = this.cartarr[i].id
  console.log(id)
  this.cartarr.splice(i,1)
  this.service.deleteproductfromcart(id).subscribe(res=>{
    console.log(res)
  })
 }

 increaseQuantity(i:any){
  console.log(i)
  let id = this.cartarr[i].id
  console.log(id)
  this.service.increasequantity(id).subscribe(res=>{
    console.log(res)
    window.location.reload();
  },(error)=>{
    console.log(error)
  })
  
 }

 decreasequantity(i:any){
  console.log(i)
  let id = this.cartarr[i].id
  console.log(id)
  this.service.decreasequantity(id).subscribe(res=>{
    console.log(res)
    window.location.reload();
  } , (error)=>{
    console.log(error)
  });
  
  
 }
}