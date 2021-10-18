import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [CustomerListComponent],
  imports: [CommonModule, TableModule],
  exports: [CustomerListComponent],
})
export class CustomerModule {}
