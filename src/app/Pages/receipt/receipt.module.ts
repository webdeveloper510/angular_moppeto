import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiptRoutingModule } from './receipt-routing.module';
import { TabsComponent } from './receipt-listing/tabs/tabs.component';
import { AllComponent } from './receipt-listing/tabs/all/all.component';
import { MarketingComponent } from './receipt-listing/tabs/marketing/marketing.component';
import { SubscriptionComponent } from './receipt-listing/tabs/subscription/subscription.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { FormatComponent } from './receipt-format/format/format.component';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [TabsComponent, AllComponent, MarketingComponent, SubscriptionComponent, FormatComponent],
  imports: [
    CommonModule,
    ReceiptRoutingModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    ButtonModule,
    InputTextareaModule,
    BsDatepickerModule.forRoot(),
    NgxDropzoneModule
  ]
})
export class ReceiptModule { }
