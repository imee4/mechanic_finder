import { Component, OnInit } from '@angular/core';   
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    // public
    public contentHeader: object | undefined;

    // constructor(public configService : CoreConfigService) {
    //   this.configService.config =
    //   {layout: {
    //     // skin: 'default',
    //     // animation: 'fadeIn',
    //     menu: {
    //       hidden: true,
    //       // collapsed: false
    //     }}
    //   }
    // } 

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Landing Page',
      actionButton: false,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Landing Page',
            isLink: false
          }
        ]
      }
    };
  }
  collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }

    //   
  
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}


