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

import { AuthInterceptor } from './interceptor/auth.interceptor';

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
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS ,
      useClass : AuthInterceptor ,
      multi : true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
