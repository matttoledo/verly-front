import { Observable } from 'rxjs';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './../product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products$ = new Observable<Product[]>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
    console.log(this.products$)
  }

  onRowEditInit() {
  }

  onRowEditSave() {
  }

  onRowEditCancel() {}
}
