import { Component, OnInit } from '@angular/core';
import { navItems } from '../user-layout/_nav';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}

   

  ngOnInit(): void {
  }
   
}
