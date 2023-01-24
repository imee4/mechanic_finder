import { Component, Input, OnInit } from '@angular/core';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent extends HeaderComponent implements OnInit {

  
  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService) {
    super();
  }ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  

}
