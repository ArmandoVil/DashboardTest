import { Component } from '@angular/core';
import { LayoutService } from './services/utils/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public layoutService: LayoutService) { }
  title = 'dashboardTest';
}
