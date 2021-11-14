import { OrderFormComponent } from './order-form/order-form.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  { path: 'order/list', component: OrderListComponent },
  { path: 'order/create', component: OrderFormComponent },
];

export const OrderRoutingRoutes = RouterModule.forChild(routes);
