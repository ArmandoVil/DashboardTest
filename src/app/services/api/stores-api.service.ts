import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstant } from 'src/app/data/common/app-constant';
import { StoreData } from 'src/app/data/models/store-data';

@Injectable({
  providedIn: 'root'
})
export class StoresApiService {

  readonly API = AppConstant.ApiStoreUrl;

  constructor(private http: HttpClient) { }

  getStore(): Observable<StoreData> {
    return this.http.get<StoreData>(this.API);
  }
}
