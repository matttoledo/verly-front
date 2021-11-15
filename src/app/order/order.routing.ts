import { OrderFormComponent } from './order-form/order-form.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  { path: 'order/list', component: OrderListComponent },
  { path: 'order/create', component: OrderFormComponent },
];

export const OrderRoutingRoutes = RouterModule.forChild(routes);
