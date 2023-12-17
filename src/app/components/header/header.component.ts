import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  hideNavbar : Boolean = false

  toggleNavbar() : void {
    this.hideNavbar = !this.hideNavbar
  }
}
