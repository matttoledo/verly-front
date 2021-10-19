import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { empty, Observable, Subject } from 'rxjs';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styles: [
    `
      :host ::ng-deep .p-cell-editing
        padding-top: 0 !important
        padding-bottom: 0 !important

  `,
  ],
})
export class CustomerListComponent implements OnInit {
  customers$!: Observable<Customer[]>;

  clonedCustomers: { [s: string]: Customer } = {};

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customers$ = this.customerService.getCustomers();
  }
  onRowEditInit(customer: Customer) {
    this.clonedCustomers[customer.id] = { ...customer };
  }

  onRowEditSave(customer: Customer) {
    this.customerService.updateCustomer(customer);
  }

  onRowEditCancel(customer: Customer, id: number) {}
}
