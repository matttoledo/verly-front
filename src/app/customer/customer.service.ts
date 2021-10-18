import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Customer } from './customer'
import { delay, take, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly API = `${environment.API}customers`;

  constructor(private http: HttpClient) { }

  getCustomers(){
    return this.http.get<Customer[]>(this.API).pipe(delay(1000), tap(console.log))
  }
}
