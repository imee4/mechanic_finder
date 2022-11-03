import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.scss']
})
export class LandingLayoutComponent implements OnInit {

  public contentHeader: object | undefined;
  constructor() { }

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
