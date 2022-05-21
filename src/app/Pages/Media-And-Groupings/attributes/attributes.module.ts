import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributesTabNavComponent } from './attributes-tab-nav.component';
import { IconsComponent } from './icons/icons.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AddAttributeComponent } from './add-attribute/add-attribute.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { BlankValueModule } from 'src/app/shared/Pipes/blank-Value/blank-value.module';
import { NoTableDataViewModule } from 'src/app/shared/no-table-data-view/no-table-data-view.module';
import { AttributesComponent } from './attributes/attributes.component';

const routes: Routes = [
  {
    path: '', component: AttributesComponent
  }
];

@NgModule({
  declarations: [AttributesComponent,
    AttributesTabNavComponent,
    IconsComponent,
    AddAttributeComponent],
  imports: [
    CommonModule,
    NgxDropzoneModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RippleModule,
    InputTextModule,
    BlankValueModule,
    NoTableDataViewModule,
    RouterModule.forChild(routes)
  ],

})
export class AttributesModule { }
