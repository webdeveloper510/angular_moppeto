import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  textSection: boolean;
  suspendOrReInstateBodyText: string;
  suspendOrReInstateBodyText2: string;
  status: string;
  isSuspended: boolean;
  isReInstated: boolean;
}

@Component({
  selector: 'app-common-modal-for-sub-admin',
  templateUrl: './common-modal-for-sub-admin.component.html',
  styleUrls: ['./common-modal-for-sub-admin.component.scss']
})
export class CommonModalForSubAdminComponent implements OnInit {


  title: string;
  textSection: boolean;
  suspendOrReInstateBodyText: string;
  suspendOrReInstateBodyText2: string;
  isSuspend: boolean;
  isReInstate: boolean;



  constructor(
    public dialogRef: MatDialogRef<CommonModalForSubAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
  }

  ngOnInit() {

  }

  public onConfirm<T>(data?: T): void {
    // Close the dialog, return true
    this.dialogRef.close(data ? data : true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}

