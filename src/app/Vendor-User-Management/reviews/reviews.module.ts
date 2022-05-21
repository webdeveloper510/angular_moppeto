import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BlankValueModule } from 'src/app/shared/Pipes/blank-Value/blank-value.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { NoTableDataViewModule } from 'src/app/shared/no-table-data-view/no-table-data-view.module';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { PaginationModule } from 'src/app/pagination/pagination.module';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  {
    path: '', component: ReviewsComponent
  }
];

@NgModule({
  declarations: [ReviewsComponent, BarChartComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    DropdownModule,
    InputTextModule,
    BsDatepickerModule,
    NoTableDataViewModule,
    BlankValueModule,
    ButtonModule,
    RippleModule,
    MatIconModule,
    PaginationModule
  ],
  exports: [ReviewsComponent]
})
export class ReviewsModule { }
