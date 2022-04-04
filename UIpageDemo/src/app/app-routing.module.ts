import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { OurserviceComponent } from './ourServices/ourservice/ourservice.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  { path: 'aboutUs', component: HeaderComponent },
  { path: 'whoveare', component: ThirdComponent },
  { path: 'Services', component: OurserviceComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
