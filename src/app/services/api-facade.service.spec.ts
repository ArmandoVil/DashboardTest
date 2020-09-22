import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApiFacadeService } from './api-facade.service';

describe('CategoriesApiService', () => {
  let service: ApiFacadeService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ApiFacadeService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(httpTestingController);
  });
});
