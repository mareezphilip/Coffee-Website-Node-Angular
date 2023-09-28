import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {
  isLogin = false
  userType = 'user'
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
}


