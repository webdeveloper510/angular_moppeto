import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './receipt-listing/tabs/tabs.component';
import { AllComponent } from './receipt-listing/tabs/all/all.component';
import { MarketingComponent } from './receipt-listing/tabs/marketing/marketing.component';
import { SubscriptionComponent } from './receipt-listing/tabs/subscription/subscription.component';
import { FormatComponent } from './receipt-format/format/format.component';

const routes: Routes = [
  {
    path: '', component: TabsComponent, children: [
      { path: 'all-tabs', component: AllComponent },
      { path: 'marketing-tabs', component: MarketingComponent },
      { path: 'subscription-tabs', component: SubscriptionComponent }
    ]
  },
  {
    path: 'format', component: FormatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptRoutingModule { }
