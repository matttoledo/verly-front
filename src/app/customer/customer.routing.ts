import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: CustomerListComponent},
  {path:'/create', component: CustomerFormComponent}
];

export const CustomerRoutingRoutes = RouterModule.forChild(routes);
