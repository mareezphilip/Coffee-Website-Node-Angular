import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {
  isLogin = false
  userType :any
  constructor(private http:HttpClient) { }
  // getreview():Observable<any>{
  //   return this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=10') 
  //  }
   getproductsbycategory(category:any):Observable<any>{
    return this.http.get(`http://localhost:5000/products/specificCategory/${category}`) 
   }
   getproductinfo(id:any):Observable<any>{
    return this.http.get(`http://localhost:5000/products/showSingleProduct/${id}`)
   }
   loginUser(obj:any):Observable<any>{
   return this.http.post("http://localhost:5000/users/login",obj)
   }
   logoutuser():Observable<any>{
   return this.http.get("http://localhost:5000/users/logout")
   }
   

 
   AddUser(obj:any):Observable<any>{

      return this.http.post("http://localhost:5000/users/add",obj)
  }

     addtocart(obj:any){
      return this.http.post("http://localhost:5000/carts/addtocart" , obj)
     }

     getusercart(){
       return this.http.get("http://localhost:5000/carts/userCart")
     }

     deleteproductfromcart(id:any){
       return this.http.delete(`http://localhost:5000/carts/deleteProductCart/${id}`)
     }

     increasequantity(id:any){
       return this.http.patch(`http://localhost:5000/carts/incProductQuantity/${id}`, null)
     }

     decreasequantity(id:any){
      return this.http.patch(`http://localhost:5000/carts/decProductQuantity/${id}`, null)
     }

    getallproducts(){
       return this.http.get("http://localhost:5000/products/allProduct")
    }

    Deleteproduct(id:any){
      return this.http.delete(`http://localhost:5000/products/deleteProduct/${id}`)
    }

    editProduct(id:any , obj:any){
      return this.http.patch(`http://localhost:5000/products/editProduct/${id}` , obj)
    }


    addproduct(obj:any){
      return this.http.post("http://localhost:5000/products/addProduct" , obj)
    }

    getallreview():Observable<any>{
      return this.http.get("http://localhost:5000/review/allReview")
     }
     addreview(obj:any):Observable<any>{
      return this.http.post("http://localhost:5000/review/addReview" , obj)
     }
     showMyProfile():Observable<any>{
      return this.http.get("http://localhost:5000/users/myProfile")
     }
     editMyprofile(obj:any):Observable<any>{
      return this.http.patch("http://localhost:5000/users/editSingle",obj)
     }
     changepassword(password:any):Observable<any>{
      return this.http.post("http://localhost:5000/users/ChangePassword",password)
    }

    searchproduct(searchkey:any):Observable<any>{
       return this.http.get(`http://localhost:5000/products/search/${searchkey}`)
       
    }


}


