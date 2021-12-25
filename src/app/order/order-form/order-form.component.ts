import { OrderService } from './../order.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      customerId: [null],
      items: [null],
      cost: [null],
      price: [null],
      debt: [null],
      profit: [null],
      paid: [null],
      status: [null],
      deliveryDate:[null],
      createdDate: [null]
        });
  }

  onSubmit(){
    console.log("clique")
  }

}
