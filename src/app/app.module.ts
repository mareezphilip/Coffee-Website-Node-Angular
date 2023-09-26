import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
