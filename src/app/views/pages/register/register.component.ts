import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor() { }

  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  
}
