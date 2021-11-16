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
  phones!:string[];

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
      firstPhone: [null],
      secondPhone:[null],
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
    this.customerService.findAdressByCep(this.form.value.cep).subscribe(
      (dados) => {
        this.form.controls['street'].setValue(dados.logradouro)
        this.form.controls['district'].setValue(dados.bairro)
        this.form.controls['city'].setValue(dados.localidade)
      },
      (error: any) => alert('erro')
    );
    console.log(this.form.value)

  }

  resetForm(){
    this.form.reset();
  }
}
