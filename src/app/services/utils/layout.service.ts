import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  layoutMode: string;
  menuToggle: boolean;

  constructor() { 
    this.layoutMode = "mat-elevation-z8";
    this.menuToggle = true;
    if (window.innerWidth <= 991) {
      this.menuToggle = false;
    }
  }
  
  toGrid() {
    this.layoutMode = "mat-elevation-z8 grid-layout";
  }
  toList() {
    this.layoutMode = "mat-elevation-z8";
  }
  toggleMenu() {
    this.menuToggle = !this.menuToggle;
  }
}
