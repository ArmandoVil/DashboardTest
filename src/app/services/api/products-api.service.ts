import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../data/models/product';
import { AppConstant } from 'src/app/data/common/app-constant';
import { ProductData } from 'src/app/data/models/product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {  

  readonly API = AppConstant.ApiStoreUrl + '/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }

  getProduct(productId: string): Observable<any> {
    return this.http.get<ProductData>(this.API + "/" + productId);
  }

  createProduct(product: ProductData): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(product)
    return this.http.post<ProductData>(this.API, body, {headers, responseType: 'json'});
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http.delete(this.API + "/" + productId);
  }
}
