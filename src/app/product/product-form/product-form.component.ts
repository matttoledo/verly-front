import { ProductService } from './../product.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  form!: FormGroup;

  products$!: Observable<Product[]>

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      category: [null],
      type: [null],
      width: [null],
      weight: [null],
      measure: [null],
      color: [null],
      cost: [null],
      price: [null],
      profit: [null]


    })


  }
  onSubmit(){
    console.log("onSubmit");
  }

  resetForm(){
    this.form.reset();
  }

}
