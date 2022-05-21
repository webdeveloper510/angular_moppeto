import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvatarsComponent } from './Vendor-User-Management/avatars/avatars.component';
import { CategoryStatisticsComponent } from './Vendor Reports/category-statistics/category-statistics.component';
import { VendorsRevenueRankingComponent } from './Vendor Reports/vendors-revenue-ranking/vendors-revenue-ranking.component';
import { ActivityRevenueRankingComponent } from './Vendor Reports/activity-revenue-ranking/activity-revenue-ranking.component';
import { VendorLocationRevenueRankingComponent } from './Vendor Reports/vendor-location-revenue-ranking/vendor-location-revenue-ranking.component';
import { CityRevenueRankingComponent } from './Vendor Reports/city-revenue-ranking/city-revenue-ranking.component';
import { SubscriptionRevenueComponent } from './Revenue/subscription-revenue/subscription-revenue.component';
import { RevenueTabNavsComponent } from './Revenue/revenue-tab-navs/revenue-tab-navs.component';
import { AdvertisingRevenueSummaryComponent } from './Revenue/advertising-revenue-summary/advertising-revenue-summary.component';
import { AdvertisingRevenueSearchWordsComponent } from './Revenue/advertising-revenue-search-words/advertising-revenue-search-words.component';
import { AdvertisingRevenueBannersComponent } from './Revenue/advertising-revenue-banners/advertising-revenue-banners.component';
import { CategoryImagesIconsTabNavComponent } from './Pages/Media-And-Groupings/Category-Images-Icons/category-images-icons-tab-nav/category-images-icons-tab-nav.component';
import { CategoryIconsComponent } from './Pages/Media-And-Groupings/Category-Images-Icons/category-icons/category-icons.component';
import { CategoryImagesComponent } from './Pages/Media-And-Groupings/Category-Images-Icons/category-images/category-images.component';
import { HomepageHeadersVendorComponent } from './Pages/Media-And-Groupings/homepage-headers/homepage-headers-vendor/homepage-headers-vendor.component';
import { HomepageHeadersSuperAdminComponent } from './Pages/Media-And-Groupings/homepage-headers/homepage-headers-super-admin/homepage-headers-super-admin.component';
import { BannersTabNavComponent } from './Pages/Media-And-Groupings/Banners/banners-tab-nav/banners-tab-nav.component';
import { HomepageBannersVendorComponent } from './Pages/Media-And-Groupings/Banners/homepage-banners-vendor/homepage-banners-vendor.component';
import { HomepageBannersSuperAdminComponent } from './Pages/Media-And-Groupings/Banners/homepage-banners-super-admin/homepage-banners-super-admin.component';
import { CouponsComponent } from './Subscription-And-Pricing/coupons/coupons.component';
import { DetailsOfCouponsReedemedComponent } from './Subscription-And-Pricing/details-of-coupons-reedemed/details-of-coupons-reedemed.component';
import { AddCouponComponent } from './Subscription-And-Pricing/add-coupon/add-coupon.component';
import { EditCouponComponent } from './Subscription-And-Pricing/edit-coupon/edit-coupon.component';
import { UserTabNavsComponent } from './Profiles/user-tab-navs/user-tab-navs.component';
import { PersonalDetailsComponent } from './Profiles/personal-details/personal-details.component';
import { PersonalSettingsComponent } from './Profiles/personal-settings/personal-settings.component';
import { DashboardComponent } from './Pages/dashboard/dashboard/dashboard.component';
import { SubscriptionPannelComponent } from './subscription-pannel/subscription-pannel.component';
import { SuspendVendorListComponent } from './Pages/activity-reports/activity-management/suspend-vendor-list/suspend-vendor-list.component';
import { ActiveVendorListComponent } from './Pages/activity-reports/activity-management/active-vendor-list/active-vendor-list.component';

// import { BroadcastComponent } from './communications/broadcast/broadcast.component';

const routes: Routes = [
  {
    path: '', children: [
    // { path: '', component: SubscriptionPannelComponent},
      // { path: '', component: UsersListComponent },
      // { path: '', component: TabNavsComponent },
      // { path: '', component: ReviewsComponent },
      // { path: '', component: AvatarsComponent },
      // { path: '', component: CategoryStatisticsComponent },
      // { path: '', component: VendorsRevenueRankingComponent },
      // { path: '', component: SubscriptionRevenueComponent },
      // { path: '', component: UserFeedbackComponent },
      // { path: '', component: CouponsComponent },
      // { path: '', component: DetailsOfCouponsReedemedComponent },
      // { path: '', component: AddCouponComponent },
      // { path: '', component: ChatComponent },
      { path: '', component: DashboardComponent },
    ]
  },
  {
    path: 'category-icons-images', component: CategoryImagesIconsTabNavComponent, children: [
      { path: 'icons', component: CategoryIconsComponent },
      { path: 'images', component: CategoryImagesComponent }
    ]
  },
  {
    path: 'users-list', loadChildren: () => import('./Vendor-User-Management/users-list/users-list.module')
      .then(m => m.UsersListModule)
  },
  {
    path: 'vendors', loadChildren: () => import('./Vendor-User-Management/vendors/vendors.module')
      .then(m => m.VendorsModule)
  },
  { path: 'avatars', component: AvatarsComponent },
  {
    path: 'reviews', loadChildren: () => import('./Vendor-User-Management/reviews/reviews.module')
      .then(m => m.ReviewsModule)
  },
  {
    path: 'category-icons-images', component: CategoryImagesIconsTabNavComponent, children: [
      { path: 'icons', component: CategoryIconsComponent },
      { path: 'images', component: CategoryImagesComponent }
    ]
  },
  { path: 'category-statistics', component: CategoryStatisticsComponent },
  { path: 'vendors-revenue-ranking', component: VendorsRevenueRankingComponent },
  { path: 'activity-revenue-ranking', component: ActivityRevenueRankingComponent },
  { path: 'vendor-location-revenue-ranking', component: VendorLocationRevenueRankingComponent },
  { path: 'city-revenue-ranking', component: CityRevenueRankingComponent },
  { path: 'subscription-revenue', component: SubscriptionRevenueComponent },
  {
    path: 'advertising-revenue', component: RevenueTabNavsComponent, children: [
      { path: 'summary', component: AdvertisingRevenueSummaryComponent },
      { path: 'search-words', component: AdvertisingRevenueSearchWordsComponent },
      { path: 'banners', component: AdvertisingRevenueBannersComponent },
    ]
  },
  {
    path: 'age-group', loadChildren: () => import('./Pages/Media-And-Groupings/age-group/age-group.module')
      .then(m => m.AgeGroupModule)
  },
  { path: 'category-sub-category', loadChildren: () => import('./Pages/Media-And-Groupings/category-or-sub-category/category-or-sub-category.module')
  .then(m => m.CategoryOrSubCategoryModule) },
  { path: 'attributes', loadChildren: () => import('./Pages/Media-And-Groupings/attributes/attributes.module')
  .then(m => m.AttributesModule) },
  {
    path: 'user-feedback', loadChildren: () => import('./Pages/Media-And-Groupings/user-feedback/user-feedback.module')
      .then(m => m.UserFeedbackModule)
  },
  { path: 'coupons', component: CouponsComponent },
  { path: 'details-of-coupons-redeemed', component: DetailsOfCouponsReedemedComponent },
  { path: 'add-coupon', component: AddCouponComponent },
  { path: 'edit-coupon', component: EditCouponComponent },
  // { path: 'chat', component: ChatComponent },
  // { path: 'broadcast', component: BroadcastComponent },
  {
    path: 'category-icons-images', component: CategoryImagesIconsTabNavComponent, children: [
      { path: 'icons', component: CategoryIconsComponent },
      { path: 'images', component: CategoryImagesComponent }
    ]
  },
  {
    path: 'homepage-headers', loadChildren: () => import('./Pages/Media-And-Groupings/homepage-headers/homepage-headers.module')
      .then(m => m.HomepageHeadersModule)
  },
  { path: 'banners-vendor', component: HomepageBannersVendorComponent },
  { path: 'banners-super-admin', component: HomepageBannersSuperAdminComponent },
  {
    path: 'country', loadChildren: () => import('./Pages/Countries/countries.module')
      .then(m => m.CountriesModule)
  },
  { path: 'suspend-vendor-list', component: SuspendVendorListComponent },
  { path: 'active-vendor-list', component: ActiveVendorListComponent},
  {
    path: 'users', component: UserTabNavsComponent, children: [
      { path: 'personal-details', component: PersonalDetailsComponent },
      { path: 'personal-settings', component: PersonalSettingsComponent }
    ]
  },
  // {
  //   path: 'banners', component: BannersTabNavComponent, children: [
  //     { path: 'vendor', component: HomepageBannersVendorComponent },
  //     { path: 'super-admin', component: HomepageBannersSuperAdminComponent }
  //   ]
  // },




  // new******** lazyLoading
  {
    path: 'communications',
    loadChildren: () => import('./Pages/communications/communications.module')
      .then(m => m.CommunicationsModule)
  },

  {
    path: 'sub-admin',
    loadChildren: () => import('./Pages/sub-admin/sub-admin.module')
      .then(m => m.SubAdminModule)
  },


  {
    path: 'static-info',
    loadChildren: () => import('./Pages/static-info/static-info.module')
      .then(m => m.StaticInfoModule)
  },

  {
    path: 'receipt',
    loadChildren: () => import('./Pages/receipt/receipt.module')
      .then(m => m.ReceiptModule)
  },

  {
    path: 'activity-management',
    loadChildren: () => import('./Pages/activity-reports/activity-reports.module')
      .then(m => m.ActivityReportsModule)
  },

  {
    path: 'subscription-pricing',
    loadChildren: () => import('./Pages/subscription-pricing/subscription-pricing.module')
      .then(m => m.SubscriptionPricingModule)
  },

  {
    path: 'payment-gateway',
    loadChildren: () => import('./Pages/payment-gateway/payment-gateway.module')
      .then(m => m.PaymentGatewayModule)
  },

  {
    path: '',
    loadChildren: () => import('./Pages/dashboard/dashboard.module')
      .then(m => m.DashboardModule),
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
