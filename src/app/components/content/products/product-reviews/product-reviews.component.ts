import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductData } from 'src/app/data/models/product-data';
import { ApiFacadeService } from 'src/app/services/api-facade.service';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss']
})
export class ProductReviewsComponent implements OnInit {

  product$: Observable<ProductData>;
  productDetails;
  id: string;
  subscribeToParams;
  
  constructor(private _activatedRoute: ActivatedRoute,
    private router: Router,
    private ApiFacade: ApiFacadeService) { 
    this.productDetails = {};
    //Prendo l'id del prodotto dal routing per passarlo alla chiamata GET del prodotto singolo
    this.subscribeToParams = this. _activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })
    this.product$ = this.ApiFacade.getProduct(this.id);
  }
  
  //TODO : prendere le review del singolo prodotto
  ngOnInit(): void {
    this.product$.subscribe(details => {
      this.productDetails = details
    })
  }
   
  ngOnDestroy() {
      this.subscribeToParams.unsubscribe();
  }
  
  goBack() {
    this.router.navigate(['/products']);
  }

}
