import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("clique")
  }

}
