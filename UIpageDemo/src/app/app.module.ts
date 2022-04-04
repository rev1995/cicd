import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BaseComponent } from './base/base.component';
import { ThirdComponent } from './third/third.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { OurserviceComponent } from './ourServices/ourservice/ourservice.component';
import { OurPrdouctsComponent } from './our-prdoucts/our-prdoucts.component';
import { AllProductsComponent } from './our-prdoucts/all-products/all-products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  }
];
const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled"
  //scrollPositionRestoration: "enabled"
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BaseComponent,
    ThirdComponent,
    OurserviceComponent,
    OurPrdouctsComponent,
    AllProductsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
