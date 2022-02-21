import { Address } from './address';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Customer } from './customer';
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private readonly API = `${environment.API}/customer`;

  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get<Customer[]>(this.API);
  }
  createCustomer(customer: Customer) {
    let response = this.http.post<Customer>(this.API, customer).subscribe(
      (customer) => console.log(customer),
      (error: any) => alert('Erro ao inserir o cliente!')
    )
    console.log(customer.phone)
    return response;
  }

  updateCustomer(customer: Customer) {
    return this.http
      .patch(this.API + '/' + customer.id, customer)
      .pipe(take(1));
  }
  findAdressByCep(cep: String) {
    return this.http
      .get<Address>(
        'https://viacep.com.br/ws/' + cep.replace('-', '') + '/json/'
      ).pipe()
  }
}
