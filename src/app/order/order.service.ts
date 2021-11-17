import { Order } from './order';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly API = `${environment.API}/order`;

  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get<Order[]>(this.API);
  }
  createOrder(order: Order) {
    let response = this.http.post<Order>(this.API, order).subscribe(
      (dados) => console.log(dados),
      (error: any) => alert('erro')
    );
    return response;
  }

  updateOrder(order: Order) {
    return this.http
      .patch(this.API + '/' + order.id, order)
      .pipe(take(1));
  }

}
