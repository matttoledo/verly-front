import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { empty, Observable, Subject } from 'rxjs';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
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
    this.customerService.updateCustomer(customer).subscribe();
  }

  onRowEditCancel(customer: Customer, id: number) {}
}
