import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeGroupComponent } from './age-group.component';
import { PaginationModule } from 'src/app/pagination/pagination.module';
import { RouterModule, Routes } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { AddEditAgeGroupComponent } from './add-edit-age-group/add-edit-age-group.component';
import { NoTableDataViewModule } from 'src/app/shared/no-table-data-view/no-table-data-view.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

const routes: Routes = [
  {
    path: '', component: AgeGroupComponent
  }
];


@NgModule({
  declarations: [AgeGroupComponent, AddEditAgeGroupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PaginationModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    NoTableDataViewModule,
    DropdownModule
  ],
  exports: [AgeGroupComponent]
})
export class AgeGroupModule { }
