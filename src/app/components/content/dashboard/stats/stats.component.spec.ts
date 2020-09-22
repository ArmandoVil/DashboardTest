import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesApiService } from 'src/app/services/api/categories-api.service';

import { StatsComponent } from './stats.component';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;
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
      declarations: [ StatsComponent ]
    })
    .compileComponents();
    service = TestBed.inject(CategoriesApiService);
    httpClient = TestBed.get(HttpClientTestingModule);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsComponent);
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

