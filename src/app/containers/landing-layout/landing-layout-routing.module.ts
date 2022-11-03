import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/views/landing/about/about.component';
import { ContactComponent } from 'src/app/views/landing/contact/contact.component';
import { LoginComponent } from 'src/app/views/pages/login/login.component';
import { RegisterComponent } from 'src/app/views/pages/register/register.component';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';

 

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    data: {
      title: `Home`
    }, 
  },
  { path: "login", component: LoginComponent }, 
  { path: "register", component: RegisterComponent },  
  { path: "about", component: AboutComponent }, 
  { path: "contact", component: ContactComponent }, 
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingLayoutRoutingModule { }
