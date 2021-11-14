import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch:'full', redirectTo: 'customer/list'
  },
  {
    path:'customer',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)

  },
  {
    path:'order',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
