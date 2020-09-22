import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoresApiService } from 'src/app/services/api/stores-api.service';

import { HeaderTitleComponent } from './header-title.component';

describe('HeaderTitleComponent', () => {
  let component: HeaderTitleComponent;
  let fixture: ComponentFixture<HeaderTitleComponent>;
  let httpClient: HttpClient;
  let service: StoresApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClientTestingModule,
        StoresApiService,
        HttpClient,
        HttpHandler
      ],
      declarations: [ HeaderTitleComponent ]
    })
    .compileComponents();
    service = TestBed.inject(StoresApiService);
    httpClient = TestBed.get(HttpClientTestingModule);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTitleComponent);
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

