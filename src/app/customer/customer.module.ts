import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CustomerFormComponent } from './customer-form/customer-form.component';

const routes: Routes = [{ path: '', component: CustomerListComponent },
{path:'create', component: CustomerFormComponent}];

@NgModule({
  declarations: [CustomerListComponent, CustomerFormComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [],
})
export class CustomerModule {}
