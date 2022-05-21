import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFeedbackComponent } from './user-feedback.component';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { PaginationModule } from 'src/app/pagination/pagination.module';
import { NoTableDataViewModule } from 'src/app/shared/no-table-data-view/no-table-data-view.module';

const routes: Routes = [
  {
    path: '', component: UserFeedbackComponent
  }
];



@NgModule({
  declarations: [UserFeedbackComponent],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
    PaginationModule,
    NoTableDataViewModule,
    RouterModule.forChild(routes)
  ],
  exports: [UserFeedbackComponent]
})
export class UserFeedbackModule { }
