import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModalForSubAdminComponent } from '../../../../shared/common-modal-for-sub-admin/common-modal-for-sub-admin.component';

@Component({
  selector: 'app-sub-admin',
  templateUrl: './sub-admin.component.html',
  styleUrls: ['./sub-admin.component.scss']
})
export class SubAdminComponent implements OnInit {
  @ViewChild('selectedRadioAction') radioAction: ElementRef;
  @ViewChild('tableView') tableView: ElementRef;

  emptySelection = true;
  isSuspended = false;
  radioChecked = false;

  constructor(
    private dialog: MatDialog,
    private renderer: Renderer2
  ) { }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.emptySelection = true;
    this.radioChecked = false;
  }
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    if (!this.radioAction.nativeElement.contains(event.target) && this.tableView.nativeElement.contains(event.target)) {
      this.emptySelection = true;
      this.radioChecked = false;
    } else {
      if (this.radioChecked) {
        this.emptySelection = false;
      }
    }
  }


  ngOnInit(): void {
  }

  changeSelection(isSuspended: boolean) {
    this.emptySelection = false;
    this.isSuspended = isSuspended;
  }



  openSuspendModal(): void {
    const dialogRef = this.dialog.open(CommonModalForSubAdminComponent, {
      data: {
        title: "Suspend Sub-admin",
        textSection: true,
        suspendOrReInstateBodyText: "Confirm suspension of Name?",
        isSuspended: true
      },
      panelClass: ['suspendModal']
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("dialogResult", dialogResult);
      if (dialogResult) {
      }
    });
  }


  openRemoveModal(): void {
    const dialogRef = this.dialog.open(CommonModalForSubAdminComponent, {
      data: {
        title: "Remove Sub-admin",
        textSection: true,
        suspendOrReInstateBodyText: "Confirm removal of Name as your ",
        suspendOrReInstateBodyText2: "Sub-admin?",
        isReInstate: true
      },
      panelClass: ['reInstateModal']
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("dialogResult", dialogResult);
      if (dialogResult) {
      }
    });
  }


  CommonModalForSubAdminComponent(CommonModalForSubAdminComponent: any, arg1:
    {
      maxWidth: string; data: {
        title: string;
        textSection: boolean;
        suspendOrReInstateBodyText: string;
        suspendOrReInstateBodyText2: string;
        isSuspended: boolean;
        isReInstated: boolean;
      };
    }) {
    throw new Error('Method not implemented.');
  }

}
