import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ReviewComponent } from './pages/review/review.component';
import { ProductsComponent } from './components/products/products.component';
import { ShowproductComponent } from './pages/showproduct/showproduct.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthpagesComponent } from './pages/authpages/authpages.component';


const routes: Routes = [
  {path: "products/hot%20Coffee" ,component:HomeComponent},
  
  {path:"about",component:AboutComponent},
  {path:"review",component:ReviewComponent},
  {path:"products/:category" , component:HomeComponent},
  {path:"products/:category/:productid" , component:ShowproductComponent},
  {path:"auth",component:AuthpagesComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
