import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { RegionComponent } from './region/region.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BlankValueModule } from 'src/app/shared/Pipes/blank-Value/blank-value.module';
import { NoTableDataViewModule } from 'src/app/shared/no-table-data-view/no-table-data-view.module';
import { AddCountryComponent } from './add-country/add-country.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UppercaseModule } from 'src/app/shared/directives/uppercase/uppercase.module';
import { OnlyAlphaModule } from 'src/app/shared/directives/only-alphabet/only-alphabet.module';
import { AddAreaRegionComponent } from './add-region/add-area-region.component';

const routes: Routes = [
  {
    path: '', component: CountryComponent,
  },
  {
    path: 'region', component: RegionComponent
  }
];


@NgModule({
  declarations: [RegionComponent, CountryComponent, AddCountryComponent, AddAreaRegionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    RippleModule,
    BlankValueModule,
    NoTableDataViewModule,
    DropdownModule,
    InputTextModule,
    RippleModule,
    FormsModule,
    ReactiveFormsModule,
    UppercaseModule,
    OnlyAlphaModule,
  ]
})
export class CountriesModule { }
