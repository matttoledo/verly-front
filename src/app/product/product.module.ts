import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ProductFormComponent } from './product-form/product-form.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

const routes: Routes = [
  { path: 'product/list', component: ProductListComponent },
  { path: 'product/create', component: ProductFormComponent },
];

@NgModule({
  declarations: [ProductListComponent, ProductFormComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    DropdownModule,
    InputNumberModule
  ],
})
export class ProductModule {}
