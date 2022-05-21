import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {VendorService} from "../../services/vendor_user_management/vendor.service"

export interface DialogData {
  title: string;
  DownloadCurrentPage: string;
  DownloadAllData: string;
}

@Component({
  selector: 'app-download-table',
  templateUrl: './download-table.component.html',
  styleUrls: ['./download-table.component.scss']
})
export class DownloadTableComponent implements OnInit {


  dialogData: DialogData;
  title: string;
  DownloadCurrentPage: string;
  DownloadAllData: string;

  constructor(
    public dialogRef: MatDialogRef<DownloadTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _vendorService: VendorService
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

  public downloadCsv (status: String): void {
    if (status == 'all') {
      this._vendorService.getCsv().subscribe((res) => {
        if (res) {
          this.onConfirm({success: true, for: status, data: res});
        } else {
          this.onDismiss();
        }
      })
      
    } else if (status == "current") {
      this.onConfirm({success: true, for: status, data: null});
    }
  }

}
