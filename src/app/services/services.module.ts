import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VendorService} from "./vendor_user_management/vendor.service"
import {VendorSubscriptionService} from "./subscription/vendor_subscription.service"


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [VendorService, VendorSubscriptionService]
})
export class ServicesModule { }
