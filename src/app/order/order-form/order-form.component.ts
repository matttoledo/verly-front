import { CustomerService } from './../../customer/customer.service';
import { OrderService } from './../order.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer/customer';
import { Observable } from 'rxjs';
@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  form!: FormGroup;

  customers$!: Observable<Customer[]>;

  selectedCustomer!: Customer;

  orderStatus!: any;

  selectedStatus!: string;

  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {

    this.orderStatus = [
      {"name":'Producao'},
      {"name":'Compra Efetuada'},
      {"name":'Rota'}
    ]

  }

  ngOnInit(): void {
    this.customers$ = this.customerService.getCustomers();

    this.form = this.formBuilder.group({
      customerId: [null],
      items: [null],
      cost: [null],
      price: [null],
      debt: [null],
      profit: [null],
      paid: [null],
      status: [null],
      deliveryDate: [null],
      createdDate: [null],
    });
    this.form.controls['status'].setValue(["PRODUCAO","ROTA"]);
  }

  onSubmit() {
    console.log('clique');
  }
}
