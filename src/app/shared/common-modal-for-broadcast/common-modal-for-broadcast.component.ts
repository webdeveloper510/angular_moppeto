import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  subjectSection: boolean;
}

@Component({
  selector: 'app-common-modal-for-broadcast',
  templateUrl: './common-modal-for-broadcast.component.html',
  styleUrls: ['./common-modal-for-broadcast.component.scss']
})
export class CommonModalForBroadcastComponent implements OnInit {

  title: string;
  subjectSection: boolean;

  constructor(
    public dialogRef: MatDialogRef<CommonModalForBroadcastComponent>,
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
