import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTitleComponent } from './components/header/header-title/header-title.component';
import { NavigationComponent } from './components/sidemenu/navigation/navigation.component';
import { StatsComponent } from './components/content/dashboard/stats/stats.component';
import { HeaderWelcomeComponent } from './components/header/header-welcome/header-welcome.component';
import { CategoriesListComponent } from './components/content/categories/categories-list/categories-list.component';
import { ProductsListComponent } from './components/content/products/products-list/products-list.component';
import { ProductCreateComponent } from './components/content/products/product-create/product-create.component';
import { HeaderComponent } from './components/header/header.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { ToolbarComponent } from './components/content/toolbar/toolbar.component';
import { ErrorInterceptor } from './errors/error.interceptor';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Page404Component } from './errors/page404/page404.component';
import { DialogDeleteComponent } from './components/content/products/products-list/dialog/dialog-delete/dialog-delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ToggleMenuComponent } from './components/header/header-title/toggle-menu/toggle-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductReviewsComponent } from './components/content/products/product-reviews/product-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTitleComponent,
    NavigationComponent,
    StatsComponent,
    HeaderWelcomeComponent,
    CategoriesListComponent,
    ProductsListComponent,
    ProductCreateComponent,
    HeaderComponent,
    SidemenuComponent,
    ToolbarComponent,
    Page404Component,
    DialogDeleteComponent,
    ToggleMenuComponent,
    ProductReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    ChartsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
