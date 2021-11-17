import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders$!: Observable<Order[]>;

  clonedOrders: { [s: string]: Order } = {};

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders$ = this.orderService.getOrders();
    console.log(this.orderService.getOrders());
  }
  onRowEditInit(order: Order) {
    this.clonedOrders[order.id] = { ...order };
  }

  onRowEditSave(order: Order) {
    this.orderService.updateOrder(order).subscribe();
  }

  onRowEditCancel(order: Order, id: number) {}

}
