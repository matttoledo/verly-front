import { Phone } from '../phone';
import { LogService } from './../../shared/log.service';
import { Address } from './../address';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ArrayDataSource } from '@angular/cdk/collections';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit {
  form!: FormGroup;

  customer: Customer = new Customer();
  address: Address = new Address();
  phone: Phone = new Phone();
  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {

  this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: [null],
      cpf: [null],
      cep: [null],
      firstPhone: [null],
      secondPhone: [null],
      logradouro: [null],
      bairro: [null],
      cidade: [null],
      uf: [null],
      complemento: [null],
    });

  }

  onSubmit() {
    // this.customer = this.form.value;
    // debugger
    // this.customer.address.localidade = this.form.value.logradouro;
    // debugger
    // this.customer.address.cidade = this.form.value.cidade;
    // this.customer.address.complemento = this.form.value.complemento;
    // this.customer.phones.one = this.form.value.firstPhone;
    // debugger
    // this.customer.phones.two = this.form.value.secondPhone;

    debugger
    this.customer.name = this.form.value.name;
    this.customer.cpf = this.form.value.cpf;

    this.address.cep = this.form.value.cep;
    this.address.bairro = this.form.value.bairro;
    this.address.localidade = this.form.value.logradouro;
    this.address.cidade = this.form.value.cidade;
    this.address.complemento = this.form.value.complemento;

    this.customer.address = this.address;

    this.phone.one = this.form.value.firstPhone;
    this.phone.two = this.form.value.secondPhone;

    this.customer.phone = this.phone;
    debugger

    console.log(this.customer);
    this.customerService.createCustomer(this.customer);
    this.form.reset();
  }

  findAddress() {
    if (this.form.value.cep.length == 9) {
      this.customerService.findAdressByCep(this.form.value.cep).subscribe(
        (dados) => {
          this.form.controls['logradouro'].setValue(dados.logradouro);
          this.form.controls['bairro'].setValue(dados.bairro);
          this.form.controls['cidade'].setValue(dados.localidade);
        },
        (error: any) => alert('Erro ao buscar o cep!')
      );
    } else {
      console.log('Cep menor do que 9!');
      alert('CEP Incompleto!')
    }
  }

  resetForm() {
    this.form.reset();
  }
}
