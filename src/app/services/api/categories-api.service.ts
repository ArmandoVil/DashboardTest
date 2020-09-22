import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../data/models/category';
import { AppConstant } from 'src/app/data/common/app-constant';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {  

  readonly API = AppConstant.ApiStoreUrl + '/stats/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API);
  }
}
