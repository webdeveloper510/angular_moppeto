import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CustomSubscriptionComponent } from '../shared/custom-subscription/custom-subscription.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DownloadTableComponent } from './download-table/download-table.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { CommonModalMediaAndGroupingsComponent } from './common-modal-media-and-groupings/common-modal-media-and-groupings.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModalForSubAdminComponent } from './common-modal-for-sub-admin/common-modal-for-sub-admin.component';
import { CommonModalForStaticInfoComponent } from './common-modal-for-static-info/common-modal-for-static-info.component';
import { CommonModalForBroadcastComponent } from './common-modal-for-broadcast/common-modal-for-broadcast.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { QuillModule } from 'ngx-quill';
import { DeleteConfirmationModalComponent } from './delete-confirmation-modal/delete-confirmation-modal.component';


@NgModule({
    declarations: [
        ConfirmDialogComponent,
        CustomSubscriptionComponent,
        DownloadTableComponent,
        DeleteConfirmationComponent,
        CommonModalMediaAndGroupingsComponent,
        CommonModalForSubAdminComponent,
        CommonModalForStaticInfoComponent,
        CommonModalForBroadcastComponent,
        DeleteConfirmationModalComponent,
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        FontAwesomeModule,
        InputTextModule,
        ButtonModule,
        DropdownModule,
        FormsModule,
        InputTextareaModule,
        QuillModule,
        ReactiveFormsModule
    ],
    exports: [
        ConfirmDialogComponent,
        CustomSubscriptionComponent,
        DownloadTableComponent,
        DeleteConfirmationComponent,
        CommonModalMediaAndGroupingsComponent,
        CommonModalForSubAdminComponent,
        CommonModalForStaticInfoComponent,
        CommonModalForBroadcastComponent,
        DeleteConfirmationModalComponent
    ]
})
export class SharedModule { }
