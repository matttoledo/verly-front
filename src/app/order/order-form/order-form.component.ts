import { CustomerService } from './../../customer/customer.service';
import { OrderService } from './../order.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer/customer';
import { Observable } from 'rxjs';
@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  form!: FormGroup;

  customers$!: Observable<Customer[]>;

  selectedCustomer!: string;


  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {
  }

  ngOnInit(): void {
    this.customers$ = this.customerService.getCustomers();
    // console.log(this.customerService.getCustomers());


    this.form = this.formBuilder.group({
      customerId: [null],
      items: [null],
      cost: [null],
      price: [null],
      debt: [null],
      profit: [null],
      paid: [null],
      status: [null],
      deliveryDate:[null],
      createdDate: [null]
        });
  }

  onSubmit(){
    console.log("clique")
  }

}
