import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import {authInterceptorProviders} from "./helpers/auth.interceptor";
import {ContentComponent} from "./content/content.component";
import {AdminComponent} from "./admin/admin.component";
import {CartComponent} from "./cart/cart.component";
import {OrderComponent} from "./order/order.component";
import {DeleteOrderComponent} from "./admin/deleteOrder/deleteOrder.component";
import {DeleteProductComponent} from "./admin/deleteProduct/deleteProduct.component";
import {AddProductComponent} from "./admin/addProduct/addProduct.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    ContentComponent,
    AdminComponent,
    CartComponent,
    OrderComponent,
    DeleteOrderComponent,
    DeleteProductComponent,
    AddProductComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule
    ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
