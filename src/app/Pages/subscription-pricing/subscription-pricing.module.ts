import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionPricingRoutingModule } from './subscription-pricing-routing.module';
import { SubscriptionPricingComponent } from './subscription-pricing/subscription-pricing.component';
import { VendorSubscriptionComponent } from './vendor-subscription/vendor-subscription.component';
import { CouponsComponent } from './coupons/coupons/coupons.component';
import { DetailsOfCouponsReedemedComponent } from './coupons/details-of-coupons-reedemed/details-of-coupons-reedemed.component';
import { AddCouponComponent } from './coupons/add-coupon/add-coupon.component';
import { EditCouponComponent } from './coupons/edit-coupon/edit-coupon.component';
import { MarketingPricingComponent } from './marketing-pricing/marketing-pricing.component';
import { SettingsComponent } from './marketing-pricing/settings/settings.component';
import { TrendingPricingComponent } from './marketing-pricing/trending-pricing/trending-pricing.component';
import { BannerPricingComponent } from './marketing-pricing/banner-pricing/banner-pricing.component';
import { HeaderPricingComponent } from './marketing-pricing/header-pricing/header-pricing.component';
import { SearchWordsComponent } from './marketing-pricing/search-words/search-words.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { CustomSubscriptionComponent } from 'src/app/shared/custom-subscription/custom-subscription.component';
import { PaginationModule } from 'src/app/pagination/pagination.module';

@NgModule({
  declarations: [
    SubscriptionPricingComponent,
    VendorSubscriptionComponent,
    CouponsComponent,
    DetailsOfCouponsReedemedComponent,
    AddCouponComponent,
    EditCouponComponent,
    MarketingPricingComponent,
    SettingsComponent,
    SearchWordsComponent,
    TrendingPricingComponent,
    BannerPricingComponent,
    HeaderPricingComponent
  ],
  imports: [
    CommonModule,
    SubscriptionPricingRoutingModule,
    FormsModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    BsDatepickerModule.forRoot(),
    ButtonModule,
    ListboxModule,
    TooltipModule,
    CheckboxModule,
    PaginationModule
  ],
  entryComponents: [
    CustomSubscriptionComponent
  ]
})
export class SubscriptionPricingModule { }
