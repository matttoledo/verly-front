import { CustomerListComponent } from './customer-list/customer-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: CustomerListComponent}
];

export const CustomerRoutingRoutes = RouterModule.forChild(routes);
