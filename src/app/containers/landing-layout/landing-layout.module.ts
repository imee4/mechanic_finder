import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  

import { LandingLayoutRoutingModule } from './landing-layout-routing.module';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    LandingLayoutComponent
  ],
  imports: [
    CommonModule,
    LandingLayoutRoutingModule,
    NgbCarouselModule
  ]

})
export class LandingLayoutModule { }
