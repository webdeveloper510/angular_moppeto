import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityReportsRoutingModule } from './activity-reports-routing.module';
import { VendorsListComponent } from './activity-management/vendors-list/vendors-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonModule } from 'primeng/button';
import { ListsComponent } from './class-list/lists/lists.component';
import { SearchByActivityComponent } from './class-list/selections/search-by-activity/search-by-activity.component';
import { ListboxModule } from 'primeng/listbox';
import { SearchByParticipantComponent } from './class-list/selections/search-by-participant/search-by-participant.component';
import { CalendarComponent } from './class-list/selections/search-by-activity/calendar/calendar.component';
import { HourCalendarComponent } from './class-list/selections/search-by-activity/hour-calendar/hour-calendar.component';
import { TooltipModule } from 'primeng/tooltip';
import { SuspendVendorListComponent } from './activity-management/suspend-vendor-list/suspend-vendor-list.component';
import { ActiveVendorListComponent } from './activity-management/active-vendor-list/active-vendor-list.component';

@NgModule({
  declarations: [
    VendorsListComponent,
    ListsComponent,
    SearchByActivityComponent,
    SearchByParticipantComponent,
    CalendarComponent,
    HourCalendarComponent,
    SuspendVendorListComponent,
    ActiveVendorListComponent
  ],
  imports: [
    CommonModule,
    ActivityReportsRoutingModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    BsDatepickerModule.forRoot(),
    ButtonModule,
    ListboxModule,
    TooltipModule
  ]
})
export class ActivityReportsModule { }
