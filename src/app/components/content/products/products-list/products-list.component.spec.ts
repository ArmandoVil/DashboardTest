import { Overlay } from '@angular/cdk/overlay';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InjectionToken } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ApiFacadeService } from 'src/app/services/api-facade.service';

import { ProductsListComponent } from './products-list.component';
describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let httpClient: HttpClient;
  let service: ApiFacadeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClientTestingModule,
        ApiFacadeService,
        HttpClient,
        HttpHandler,
        MatDialog,
        Overlay,
        {provider: InjectionToken, useClass: 'mat-dialog-scroll-strategy'}
      ],
      declarations: [ ProductsListComponent ]
    })
    .compileComponents();
    service = TestBed.inject(ApiFacadeService);
    httpClient = TestBed.get(HttpClientTestingModule);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
      TestBed.resetTestingModule();
  });

  //it('should create', () => {
    //expect(component).toBeTruthy();
    /*service.getProducts().subscribe(
      (res) => {expect(res).toBeTruthy();}
    );*/    
  //});

});


