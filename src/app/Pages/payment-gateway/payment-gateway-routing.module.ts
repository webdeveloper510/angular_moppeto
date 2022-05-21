import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { PaymentReceiptComponent } from './payment-receipt/payment-receipt.component';

const routes: Routes = [
  { path: '', component: PaymentGatewayComponent },
  { path: 'receipts', component: PaymentReceiptComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentGatewayRoutingModule { }
