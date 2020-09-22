import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiFacadeService } from 'src/app/services/api-facade.service';

import { ProductReviewsComponent } from './product-reviews.component';

describe('ProductReviewsComponent', () => {
  let component: ProductReviewsComponent;
  let fixture: ComponentFixture<ProductReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiFacadeService
      ],
      declarations: [ ProductReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
