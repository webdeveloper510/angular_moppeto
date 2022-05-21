import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainInfoComponent } from './main-info/main-info.component';
import { OtherInfoComponent } from './other-info/other-info.component';
import { VendorsComponent } from './vendors.component';
import { RouterModule, Routes } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BlankValueModule } from 'src/app/shared/Pipes/blank-Value/blank-value.module';
import { TitleCaseModule } from 'src/app/pipes/title-case/title-case.module';
import { PaginationModule } from 'src/app/pagination/pagination.module';
import { InputTextModule } from 'primeng/inputtext';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  {
    path: '', component: VendorsComponent,
    children: [
      { path: 'main-info', component: MainInfoComponent },
      { path: 'other-info', component: OtherInfoComponent }
    ]
  }
];

@NgModule({
  declarations: [VendorsComponent,MainInfoComponent,OtherInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PaginationModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
    BlankValueModule,
    TitleCaseModule,
    ToastrModule.forRoot(), 
  ]
})
export class VendorsModule { }
