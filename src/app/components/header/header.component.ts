import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit{
  

  constructor(){}

  ngOnInit() {  
    this.screenWidth = window.innerWidth;  
    this.screenHeight = window.innerHeight; 
    
    if(this.screenWidth >= 1336){
      console.log(this.screenWidth)
      this.hideNavbar = true
    }
  } 

  screenWidth : number = 0;
  screenHeight : number = 0;

  hideNavbar : Boolean = false
  innerWidth : any;

  toggleNavbar() : void {
    this.hideNavbar = !this.hideNavbar
  }

  @HostListener('window:resize', ['$event'])
  onresize() {
    this.innerWidth = window.innerWidth;

    if(this.innerWidth <= 1336){
      console.log(this.screenWidth)
      this.hideNavbar = false
    }
    if(this.innerWidth >= 1336){
      console.log(this.screenWidth)
      this.hideNavbar = true
    }
  }
}
