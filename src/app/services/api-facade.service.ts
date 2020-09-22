import { Injectable, Injector } from '@angular/core';
import { CategoriesApiService } from './api/categories-api.service';
import { ProductsApiService } from './api/products-api.service';
import { StoresApiService } from './api/stores-api.service';
import { ProductData } from '../data/models/product-data';
import { Product } from '../data/models/product';
import { Observable } from 'rxjs';
import { StoreData } from '../data/models/store-data';

@Injectable({
  providedIn: 'root'
})
export class ApiFacadeService {

  private _categoriesApiService: CategoriesApiService;
  public get categoriesApiService(): CategoriesApiService {
    if(!this._categoriesApiService){
      this._categoriesApiService = this.injector.get(CategoriesApiService);
    }
    return this._categoriesApiService;
  }

  private _productsApiService: ProductsApiService;
  public get productsApiService(): ProductsApiService {
    if(!this._productsApiService){
      this._productsApiService = this.injector.get(ProductsApiService);
    }
    return this._productsApiService;
  }

  private _storesApiService: StoresApiService;
  public get storesApiService(): StoresApiService {
    if(!this._storesApiService){
      this._storesApiService = this.injector.get(StoresApiService);
    }
    return this._storesApiService;
  }
  
  constructor(private injector: Injector) {  }

  //FUNZIONI API STORE
  getStore() {
    return this.storesApiService.getStore();
  }

  //FUNZIONI API CATEGORIE
  getCategories() {
    return this.categoriesApiService.getCategories();
  }

  //FUNZIONI API PRODOTTI
  getProducts() {
    return this.productsApiService.getProducts();
  }

  getProduct(productId: string) {
    return this.productsApiService.getProduct(productId);
  }

  createProduct(product: ProductData) {
    return this.productsApiService.createProduct(product);
  }

  deleteProduct(productId: string) {
    return this.productsApiService.deleteProduct(productId);
  }
}

