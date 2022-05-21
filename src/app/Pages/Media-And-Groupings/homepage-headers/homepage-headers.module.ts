import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageHeadersVendorComponent } from './homepage-headers-vendor/homepage-headers-vendor.component';
import { HomepageHeadersTabNavComponent } from './homepage-headers-tab-nav/homepage-headers-tab-nav.component';
import { HomepageHeadersSuperAdminComponent } from './homepage-headers-super-admin/homepage-headers-super-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: HomepageHeadersTabNavComponent,
    children: [
      { path: 'vendor', component: HomepageHeadersVendorComponent },
      { path: 'super-admin', component: HomepageHeadersSuperAdminComponent }
    ]
  }
];



@NgModule({
  declarations: [HomepageHeadersVendorComponent,
    HomepageHeadersTabNavComponent,
    HomepageHeadersSuperAdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class HomepageHeadersModule { }
