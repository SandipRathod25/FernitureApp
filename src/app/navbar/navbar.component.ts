import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  toggle: boolean = false;
  toggleOn() {
    this.toggle = !this.toggle
  }
  menu: boolean = false;
  show_cross: boolean = false;
  toggleMenu() {
    this.menu = !this.menu
    this.show_cross = !this.show_cross;
  }
}
