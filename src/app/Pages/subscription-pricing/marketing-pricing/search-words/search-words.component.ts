import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteConfirmationModalComponent } from 'src/app/shared/delete-confirmation-modal/delete-confirmation-modal.component';
import { EditModeService } from '../service/edit-mode.service';

@Component({
  selector: 'app-search-words',
  templateUrl: './search-words.component.html',
  styleUrls: ['./search-words.component.scss']
})
export class SearchWordsComponent implements OnInit {

  demoTable = [
    {
      editMode: true,
      inrButton: {
        edit: true,
        delete: true
      }
    },
    {
      editMode: true,
      inrButton: {
        edit: true,
        delete: false
      }
    }
  ]

  isEdit: boolean = true;

  constructor(private dialog: MatDialog, private editServ: EditModeService, private router: Router) {
    this.editServ.isTableEditMode.subscribe(e => {
      this.isEdit = e
    })
    this.router.events.subscribe((val) => {
      this.editServ.isTableEditMode.next(false)
    });
  }

  ngOnInit(): void {
  }

  editPricing(i) {
    this.demoTable[i].editMode = false;
    // this.isEdit = false;
    this.editServ.isTableEditMode.next(true)
  }
  cancelEditPricing(i) {
    this.demoTable[i].editMode = true;
    // this.isEdit = true;
    this.editServ.isTableEditMode.next(false)
  }

  deleteSearchWords(): void {
    const dialogRef = this.dialog.open(DeleteConfirmationModalComponent, {
      data: {
        title: "Delete Search Words option",
        bodyText: "Confirm removal of Search Words option?",
      },
      panelClass: ['deleteSearchWordsModal']
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("dialogResult", dialogResult);
      if (dialogResult) {
      }
    });
  }

}