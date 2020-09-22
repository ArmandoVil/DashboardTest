import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreData } from 'src/app/data/models/store-data';
import { ApiFacadeService } from 'src/app/services/api-facade.service';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss']
})
export class HeaderTitleComponent implements OnInit {

  store$: Observable<StoreData>;
  storeObject: any;

  constructor(private apiFacade: ApiFacadeService) { 
    this.storeObject = {}
    this.store$ = this.apiFacade.getStore();
  }

  ngOnInit(): void {
    this.store$.subscribe(store => {
      this.storeObject = store
    })
  }

}