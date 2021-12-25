import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cash/cash-flow', component: CashFlowComponent },
];

export const CashRoutes = RouterModule.forChild(routes);
