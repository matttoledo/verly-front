import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from '../order/order-list/order-list.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

const routes: Routes = [{ path: 'product/list', component: ProductListComponent }];

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
})
export class ProductModule {}
