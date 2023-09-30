import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { ReviewComponent } from './pages/review/review.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CartComponent } from './pages/cart/cart.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductsComponent } from './components/products/products.component';
import { ShowproductComponent } from './pages/showproduct/showproduct.component';
import { FormsModule } from '@angular/forms';
import { AuthpagesComponent } from './pages/authpages/authpages.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { ErrorComponent } from './pages/error/error.component';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { DashboardComponent } from './adminpages/dashboard/dashboard.component';
import { AddnewproductComponent } from './adminpages/addnewproduct/addnewproduct.component';
import { EditProductComponent } from './adminpages/edit-product/edit-product.component';
import { DeleteproductComponent } from './adminpages/deleteproduct/deleteproduct.component';
import { AllusersComponent } from './adminpages/allusers/allusers.component';
import { AddadminComponent } from './adminpages/addadmin/addadmin.component';
import { AddreviewComponent } from './components/addreview/addreview.component';
import { ShowprofileComponent } from './pages/showprofile/showprofile.component';
import { ChangepasswordComponent } from './pages/auth/changepassword/changepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ReviewComponent,
    MenuComponent,
    CartComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    SidebarComponent,
    ProductsComponent,
    ShowproductComponent,
    AuthpagesComponent,
    ErrorComponent,
    DashboardComponent,
    AddnewproductComponent,
    EditProductComponent,
    DeleteproductComponent,
    AllusersComponent,
    AddadminComponent,
    AddreviewComponent,
    ShowprofileComponent,
    ChangepasswordComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), 
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS ,
      useClass : AuthInterceptor ,
      multi : true,
     
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
