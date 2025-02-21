import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { BuyerComponent } from './buyer/buyer.component';
import { LoginComponent } from './login/login.component';
import { SellerComponent } from './seller/seller.component';
import { CatagorymgmtComponent } from './admin/catagorymgmt/catagorymgmt.component';
import { ShowproductsComponent } from './buyer/showproducts/showproducts.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './seller/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BuyerComponent,
    LoginComponent,
    SellerComponent,
    CatagorymgmtComponent,
    ShowproductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
