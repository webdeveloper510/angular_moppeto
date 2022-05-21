import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSubAdminComponent } from './listing/add-sub-admin/add-sub-admin.component';
import { EditSubAdminComponent } from './listing/edit-sub-admin/edit-sub-admin.component';
import { SubAdminComponent } from './listing/sub-admin/sub-admin.component';
import { CityListComponent } from './permission-rights/city-list/city-list.component';
import { CountryListComponent } from './permission-rights/country-list/country-list.component';
import { GlobalListComponent } from './permission-rights/global-list/global-list.component';
import { ListTabNavComponent } from './permission-rights/list-tab-nav/list-tab-nav.component';

const routes: Routes = [
  {
    path: '', component: SubAdminComponent,
  },
  {
    path: 'add-sub-admin', component: AddSubAdminComponent,
  },
  {
    path: 'edit-sub-admin', component: EditSubAdminComponent,
  },
  {
    path: 'permission-rights', component: ListTabNavComponent,
    children: [
      { path: 'global-list', component: GlobalListComponent },
      { path: 'country-list', component: CountryListComponent },
      { path: 'city-list', component: CityListComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubAdminRoutingModule { }
