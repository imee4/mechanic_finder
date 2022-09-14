import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: {
      title: `Landing`
    }, 
  },
  { path: "login", component: LoginComponent }, 
  { path: "register", component: RegisterComponent }, 
];
// export const UserLayoutRoutes: Routes = [
  
 
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
