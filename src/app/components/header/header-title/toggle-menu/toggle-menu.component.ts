import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/utils/layout.service';

@Component({
  selector: 'app-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.scss']
})
export class ToggleMenuComponent implements OnInit {

  @Input()
  toggleIcon;

  constructor(public layoutService: LayoutService) { 
  }

  ngOnInit(): void {
  }

}
