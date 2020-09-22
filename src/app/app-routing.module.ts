import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from './components/content/dashboard/stats/stats.component';
import { CategoriesListComponent } from './components/content/categories/categories-list/categories-list.component';
import { ProductsListComponent } from './components/content/products/products-list/products-list.component';
import { ProductCreateComponent } from './components/content/products/product-create/product-create.component';
import { ProductReviewsComponent } from './components/content/products/product-reviews/product-reviews.component';
import { Page404Component } from './errors/page404/page404.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '', component: StatsComponent },
  { path: 'categories', component: CategoriesListComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'products/add', component: ProductCreateComponent },
  { path: 'product/reviews/:id', component: ProductReviewsComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
