import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { BlankValueModule } from 'src/app/shared/Pipes/blank-Value/blank-value.module';
import { NoTableDataViewModule } from 'src/app/shared/no-table-data-view/no-table-data-view.module';
import { PaginationModule } from 'src/app/pagination/pagination.module';
import { TitleCaseModule } from 'src/app/pipes/title-case/title-case.module';

const routes: Routes = [
  {
    path: '', component: UsersListComponent
  }
];

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DropdownModule,
    FormsModule,
    InputTextModule,
    NoTableDataViewModule,
    BlankValueModule,
    PaginationModule,
    TitleCaseModule
  ],
  exports: [UsersListComponent]
})
export class UsersListModule { }
