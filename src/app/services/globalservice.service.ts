import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {

  constructor(private http:HttpClient) { }
  // getreview():Observable<any>{
  //   return this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=10') 
  //  }
   getproductsbycategory(category:any):Observable<any>{
    return this.http.get(`http://localhost:5000/products/specificCategory/${category}`) 
   }

}

