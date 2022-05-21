import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentGatewayRoutingModule } from './payment-gateway-routing.module';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { PaymentReceiptComponent } from './payment-receipt/payment-receipt.component';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
  declarations: [
    PaymentGatewayComponent,
    PaymentReceiptComponent
  ],
  imports: [
    CommonModule,
    PaymentGatewayRoutingModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    BsDatepickerModule.forRoot(),
    RadioButtonModule,
  ]
})
export class PaymentGatewayModule { }
