import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubAdminRoutingModule } from './sub-admin-routing.module';
import { SubAdminComponent } from './listing/sub-admin/sub-admin.component';
import { ButtonModule } from 'primeng/button';
import { AddSubAdminComponent } from './listing/add-sub-admin/add-sub-admin.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditSubAdminComponent } from './listing/edit-sub-admin/edit-sub-admin.component';
import { GlobalListComponent } from './permission-rights/global-list/global-list.component';
import { CountryListComponent } from './permission-rights/country-list/country-list.component';
import { CityListComponent } from './permission-rights/city-list/city-list.component';
import { ListTabNavComponent } from './permission-rights/list-tab-nav/list-tab-nav.component';
import { DragDropModule } from 'primeng/dragdrop';
import { NoTableDataViewModule } from 'src/app/shared/no-table-data-view/no-table-data-view.module';
import { BlankValueModule } from 'src/app/shared/Pipes/blank-Value/blank-value.module';
import { PaginationModule } from 'src/app/pagination/pagination.module';
import { TitleCaseModule } from 'src/app/pipes/title-case/title-case.module';

@NgModule({
  declarations: [
    SubAdminComponent,
    AddSubAdminComponent,
    EditSubAdminComponent,
    GlobalListComponent,
    CountryListComponent,
    CityListComponent,
    ListTabNavComponent
  ],
  imports: [
    CommonModule,
    SubAdminRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    InputTextareaModule,
    DragDropModule,
    NoTableDataViewModule,
    BlankValueModule,
    ReactiveFormsModule,
    PaginationModule,
    TitleCaseModule
  ]
})
export class SubAdminModule { }
