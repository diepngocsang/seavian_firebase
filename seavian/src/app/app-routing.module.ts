import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';


// { path: '', redirectTo: 'product-list', pathMatch: 'full' },
//   { path: 'product-list', component: ProductList },
//   { path: 'product-details/:id', component: ProductDetails }
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: ':product', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



