import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StaticInfoRoutingModule } from './static-info-routing.module';
import { LogoComponent } from './logo/logo/logo.component';
import { OtherInfoComponent } from './other-info/other-info/other-info.component';
import { ViewOtherInfoComponent } from './other-info/view-other-info/view-other-info.component';
import { EditOtherInfoComponent } from './other-info/edit-other-info/edit-other-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { QuillModule } from 'ngx-quill';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {ClipboardModule} from '@angular/cdk/clipboard';

@NgModule({
  declarations: [
    LogoComponent,
    OtherInfoComponent,
    ViewOtherInfoComponent,
    EditOtherInfoComponent
  ],
  imports: [
    CommonModule,
    StaticInfoRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    InputTextModule,
    CheckboxModule,
    QuillModule.forRoot(),
    ClipboardModule,
    NgxDropzoneModule
  ]
})
export class StaticInfoModule { }
