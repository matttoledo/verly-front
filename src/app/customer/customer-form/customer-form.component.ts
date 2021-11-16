import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      phones: [null],
      street:[null],
      number:[null],
      district:[null],
      city:[null],
      state:[null],
      complement:[null]
    });
  }


  onSubmit(){
    this.customer = this.form.value;
    this.customerService.createCustomer(this.customer);
    this.form.reset();
  }

  findAddress(){
    let address = this.customerService.findAdressByCep(this.form.value.cep);
  }

  resetForm(){
    this.form.reset();
  }
}
