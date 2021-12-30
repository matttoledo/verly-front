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
      logradouro:[null],
      bairro:[null],
      cidade:[null],
      uf:[null],
      complemento:[null]
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
        this.form.controls['logradouro'].setValue(dados.logradouro)
        this.form.controls['bairro'].setValue(dados.bairro)
        this.form.controls['cidade'].setValue(dados.localidade)
      },
      (error: any) => alert('erro')
    );
    console.log("Consulta de cep finalizada!");

  }

  resetForm(){
    this.form.reset();
  }
}
