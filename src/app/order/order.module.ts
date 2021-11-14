import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';


const routes: Routes = [
  { path: 'order/list', component: OrderListComponent },
  { path: 'order/create', component: OrderFormComponent },
];

@NgModule({
  declarations: [OrderListComponent, OrderFormComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  exports: [],
})
export class OrderModule { }


