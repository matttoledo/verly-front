import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Customer } from './customer'
import { delay, take, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly API = `${environment.API}/customer`;

  constructor(private http: HttpClient) { }

  getCustomers(){
    return this.http.get<Customer[]>(this.API);
  }
  createCustomer(customer: Customer){
    console.log("cheguei")
    this.http.post<Customer>(this.API, customer).subscribe(dados => console.log(dados));
    console.log("nao fiz o post")
    return customer;
  }

  updateCustomer(customer: Customer){
    return this.http.patch(this.API + '/' + customer.id, customer).pipe(take(1));
  }
  findAdressByCpf(cep:number){
    return console.log(this.http.get('https://viacep.com.br/ws/'+cep+'/json/'))
  }

}
