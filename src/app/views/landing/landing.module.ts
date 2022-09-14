import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';  
import { LandingComponent } from './landing.component'


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    NgbCarouselModule
  ]
})
export class LandingModule { }


///
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
 