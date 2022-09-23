import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { CategoryComponent } from './components/category/category.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'newProduct', component: AddProductComponent},
  { path: 'product/:id', component: EditProductComponent},
  { path: 'category', component: CategoryComponent },
  { path: 'category/newcategory', component: AddCategoryComponent },
  { path: 'category/:id', component: EditCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
