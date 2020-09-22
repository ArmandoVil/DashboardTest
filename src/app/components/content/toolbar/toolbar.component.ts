import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/utils/layout.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input()
  addNewButton: boolean;

  constructor(public layoutService: LayoutService) { 
    this.addNewButton = true;
  }
  
  ngOnInit(): void {
  }

}
