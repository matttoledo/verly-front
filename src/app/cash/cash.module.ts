import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';

const routes: Routes = [{ path: 'cash/cash-flow', component: CashFlowComponent }];

@NgModule({
  declarations: [CashFlowComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class CashModule {}
