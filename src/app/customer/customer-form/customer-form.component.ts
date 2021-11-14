import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit {
  customer!: Customer;
  form!: FormGroup;

  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null],
      cpf: [null],
      cep: [null],
      address: [null],
      phone: [null],
      phone2: [null],
      complement: [null]
    });
  }


  onSubmit(){
    this.customer = this.form.value;
    this.customerService.createCustomer(this.customer);
  }
}
