import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Category } from 'src/app/data/models/category';
import { ApiFacadeService } from 'src/app/services/api-facade.service';
import { LayoutService } from 'src/app/services/utils/layout.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  allCategories$: Observable<Category[]>;
  pageSizeOptions: number[];
  dataSource;
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiFacade: ApiFacadeService,
              public layoutService: LayoutService) {
    this.pageSizeOptions = [5, 10, 25];
    this.displayedColumns = ['category', 'numberOfProducts'];
  }

  ngOnInit() {
    this.allCategories$ = this.apiFacade.getCategories();
    this.allCategories$.subscribe(categories => {
      this.dataSource = new MatTableDataSource<Category>(categories);
      this.dataSource.paginator = this.paginator;
    });
  }

}
