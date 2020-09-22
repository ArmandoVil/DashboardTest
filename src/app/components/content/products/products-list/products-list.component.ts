import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Product } from 'src/app/data/models/product';
import { ApiFacadeService } from 'src/app/services/api-facade.service';
import { LayoutService } from 'src/app/services/utils/layout.service';
import { DialogDeleteComponent } from './dialog/dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  allProducts$: Observable<Product[]>;
  pageSizeOptions: number[];
  dataSource;
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ApiFacade: ApiFacadeService, 
              public layoutService: LayoutService,
              public dialog: MatDialog) {
    this.pageSizeOptions = [5, 10, 25];
    this.displayedColumns = ['id', 'title', 'description', 'price', 'category', 'employee', 'reviews', 'actions'];
   }   

  openDialogDelete(id): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: {product: id}
    });
  }

  ngOnInit(): void {
    this.allProducts$ = this.ApiFacade.getProducts();
    this.allProducts$.subscribe(products => {
      this.dataSource = new MatTableDataSource<Product>(products);
      this.dataSource.paginator = this.paginator;
    });
  }

}
