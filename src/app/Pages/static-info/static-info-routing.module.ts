import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoComponent } from './logo/logo/logo.component';
import { EditOtherInfoComponent } from './other-info/edit-other-info/edit-other-info.component';
import { OtherInfoComponent } from './other-info/other-info/other-info.component';
import { ViewOtherInfoComponent } from './other-info/view-other-info/view-other-info.component';

const routes: Routes = [
  { path: '', component: LogoComponent },
  { path: 'other-info', component: OtherInfoComponent },
  { path: 'view-other-info', component: ViewOtherInfoComponent },
  { path: 'edit-other-info', component: EditOtherInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticInfoRoutingModule { }
