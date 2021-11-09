import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.sass']
})
export class CustomerFormComponent implements OnInit {

  customer!: Customer;


  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    console.log(this.customerService.findAdressByCpf(23060000));

  }

}
