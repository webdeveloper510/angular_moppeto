import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: SubscriptionPricingComponent },
  { path: 'vendor-subscription', component: VendorSubscriptionComponent },
  { path: 'coupons', component: CouponsComponent },
  { path: 'details-of-coupons-redeemed', component: DetailsOfCouponsReedemedComponent },
  { path: 'add-coupon', component: AddCouponComponent },
  { path: 'edit-coupon', component: EditCouponComponent },
  {
    path: 'marketing-pricing', component: MarketingPricingComponent, children: [
      { path: 'settings', component: SettingsComponent },
      { path: 'banner-pricing', component: BannerPricingComponent },
      { path: 'header-pricing', component: HeaderPricingComponent },
      { path: 'trending-pricing', component: TrendingPricingComponent },
      { path: 'search-words', component: SearchWordsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionPricingRoutingModule { }
