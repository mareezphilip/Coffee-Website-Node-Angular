import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ReviewComponent } from './pages/review/review.component';
import { ProductsComponent } from './components/products/products.component';
import { ShowproductComponent } from './pages/showproduct/showproduct.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthpagesComponent } from './pages/authpages/authpages.component';
import { ErrorComponent } from './pages/error/error.component';
import { DashboardComponent } from './adminpages/dashboard/dashboard.component';
import { AddnewproductComponent } from './adminpages/addnewproduct/addnewproduct.component';
import { EditProductComponent } from './adminpages/edit-product/edit-product.component';
import { DeleteproductComponent } from './adminpages/deleteproduct/deleteproduct.component';
import { AllusersComponent } from './adminpages/allusers/allusers.component';
import { AddadminComponent } from './adminpages/addadmin/addadmin.component';
import { canActivateGuard } from './guards/can-activate.guard';
import { CartComponent } from './pages/cart/cart.component';
import { ShowprofileComponent } from './pages/showprofile/showprofile.component';

const routes: Routes = [
  {path: "products/hot%20Coffee" ,component:HomeComponent},
  {path: "" , redirectTo:"products/hot%20Coffee" , pathMatch:'full'},
  {path:"about",component:AboutComponent},
  {path:"review" , component:ReviewComponent},
  {path: "cart" , component:CartComponent},
  {path:"products/:category" , component:HomeComponent},
  {path:"products/:category/:productid" , component:ShowproductComponent},
  {path:"auth",component:AuthpagesComponent},
  {path:"error" , component:ErrorComponent},
  {path:"dashboard" , component:DashboardComponent , },
  {path:"dashboard/addnewproduct" , component:AddnewproductComponent},
  {path:"dashboard/editproduct" , component:EditProductComponent},
  {path:"dashboard/delete" , component:DeleteproductComponent},
  {path:"dashboard/allusers" , component:AllusersComponent},
  {path:"dashboard/addadmin" , component:AddadminComponent},
  {path:"myprofile" , component:ShowprofileComponent}

  // canActivate:[canActivateGuard]



 

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
