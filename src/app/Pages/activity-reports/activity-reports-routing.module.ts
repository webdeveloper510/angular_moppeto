import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorsListComponent } from './activity-management/vendors-list/vendors-list.component';
import { ListsComponent } from './class-list/lists/lists.component';
import { SearchByActivityComponent } from './class-list/selections/search-by-activity/search-by-activity.component';
import { SearchByParticipantComponent } from './class-list/selections/search-by-participant/search-by-participant.component';

const routes: Routes = [
  { path: '', component: VendorsListComponent },
  { path: 'class-list', component: ListsComponent },
  { path: 'search-by-participants/:participant', component: SearchByParticipantComponent },
  { path: 'search-by-activities', component: SearchByActivityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityReportsRoutingModule { }
