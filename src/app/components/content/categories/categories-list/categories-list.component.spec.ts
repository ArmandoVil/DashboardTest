import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesApiService } from 'src/app/services/api/categories-api.service';

import { CategoriesListComponent } from './categories-list.component';

describe('CategoriesListComponent', () => {
  let component: CategoriesListComponent;
  let fixture: ComponentFixture<CategoriesListComponent>;
  let httpClient: HttpClient;
  let service: CategoriesApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClientTestingModule,
        CategoriesApiService,
        HttpClient,
        HttpHandler
      ],
      declarations: [ CategoriesListComponent ]
    })
    .compileComponents();
    service = TestBed.inject(CategoriesApiService);
    httpClient = TestBed.get(HttpClientTestingModule);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
      TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
