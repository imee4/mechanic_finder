import { Component, OnInit } from '@angular/core';
import { navItems } from '../mechanic-layout/_nav';

@Component({
  selector: 'app-mechanic-layout',
  templateUrl: './mechanic-layout.component.html',
  
})
export class MechanicLayoutComponent implements OnInit {

  
  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}

  ngOnInit(): void {
  }

}
