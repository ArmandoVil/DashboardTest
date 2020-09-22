import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductData } from 'src/app/data/models/product-data';
import { ApiFacadeService } from 'src/app/services/api-facade.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  addProductForm: FormGroup;
  loading: boolean;

  constructor(private router: Router,
              private ApiFacade: ApiFacadeService,
              private formBuilder: FormBuilder) { 
      this.addProductForm = this.formBuilder.group({
        title: new FormControl('', [Validators.required]),
        category: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required]),
        employee: new FormControl('', [Validators.required]),
        description: new FormControl(''),
      });
  }

  ngOnInit(): void {
  }

  addProduct() {
    this.loading = true;
    var formData = new ProductData();
    formData.title = this.addProductForm.get('title').value;
    formData.category = this.addProductForm.get('category').value;
    formData.price = Number(this.addProductForm.get('price').value);
    formData.employee = this.addProductForm.get('employee').value;
    formData.description = this.addProductForm.get('description').value;
    this.ApiFacade.createProduct(formData)
      .subscribe(   
        (event: HttpEvent<any>) => {
          console.log(event)
          switch (event.type) {
            case HttpEventType.Sent:
              console.log('Request sent!');
              break;
            case HttpEventType.ResponseHeader:
              console.log('Response received!');
              break;
            case HttpEventType.Response:
              console.log('Product created!', event.body);
              this.loading = false;
              this.router.navigate(['/products']); 
          }
        },
        (error: HttpErrorResponse) => {
          if (error.status == 200)
          this.loading = false;
          this.router.navigate(['/products']); 
        }
      )
  }

  goBack() {
    this.router.navigate(['/products']);
  }

}

