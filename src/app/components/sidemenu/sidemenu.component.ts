import { Component, HostListener, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { LayoutService } from 'src/app/services/utils/layout.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  constructor(public layoutService: LayoutService) {
  }
   
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 991) {
      this.layoutService.menuToggle = false;
    } else {
      this.layoutService.menuToggle = true;
    }
  }
   
   ngOnInit() {
   }

}
