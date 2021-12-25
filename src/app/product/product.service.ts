import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API = `${environment.API}/product`

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.API);
  }

}
