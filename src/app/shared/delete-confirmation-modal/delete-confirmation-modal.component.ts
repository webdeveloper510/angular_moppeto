import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  textSection: boolean;
  bodyText: string;
  bodyText2: string;
  isSuspend: boolean;
  isReInstate: boolean;
}

@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrls: ['./delete-confirmation-modal.component.scss']
})
export class DeleteConfirmationModalComponent implements OnInit {


  title: string;
  bodyText: string;



  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationModalComponent>,
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
