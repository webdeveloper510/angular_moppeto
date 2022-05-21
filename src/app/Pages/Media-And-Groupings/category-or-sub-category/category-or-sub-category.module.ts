import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryOrSubCategoryComponent } from './category-or-sub-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { NoTableDataViewModule } from 'src/app/shared/no-table-data-view/no-table-data-view.module';
import { BlankValueModule } from 'src/app/shared/Pipes/blank-Value/blank-value.module';
import { AddCategoryComponent } from './add-category/add-category.component';

const routes: Routes = [
  {
    path: '', component: CategoryOrSubCategoryComponent
  }
];


@NgModule({
  declarations: [CategoryOrSubCategoryComponent, AddCategoryComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RippleModule,
    InputTextModule,
    BlankValueModule,
    NoTableDataViewModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryOrSubCategoryModule { }
