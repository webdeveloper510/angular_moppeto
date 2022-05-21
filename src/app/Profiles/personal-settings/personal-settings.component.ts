import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModalMediaAndGroupingsComponent } from '../../shared/common-modal-media-and-groupings/common-modal-media-and-groupings.component';


@Component({
  selector: 'app-personal-settings',
  templateUrl: './personal-settings.component.html',
  styleUrls: ['./personal-settings.component.scss']
})
export class PersonalSettingsComponent implements OnInit {

  password;

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.password = 'password';
  }

  showPassword() {
    if (this.password === 'password') {
      this.password = 'text';
    } else {
      this.password = 'password';
    }
  }


  passwordChanged(): void {
    const dialogRef = this.dialog.open(CommonModalMediaAndGroupingsComponent, {
      data: {
        title: "Change password",
        normalDialogHead2: "Password changed successfully.",
        dropdownSection: false,
        inputTextSection: false,
        addButton: false,
        editButton: false,
        yesButton: false,
        okButton: true,
        textSection: true,
        textSectionHeader1: false,

      },
      panelClass: ['customDialogClassState', 'passwordChanged']
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("dialogResult", dialogResult);
      if (dialogResult) {
      }
    });
  }



  CommonModalMediaAndGroupingsComponent(CommonModalMediaAndGroupingsComponent: any, arg1:
    {
      maxWidth: string; data: {
        title: string;
        inputLabel: string;
        dropdownSection: boolean;
        inputTextSection: Blob;
        addButton: boolean;
        editButton: boolean;
        yesButton: boolean;
        okButton: boolean;
        textSection: boolean;
        textSectionHeader1: boolean;
        normalDialogHead1: string;
        normalDialogHead2: string;
      };
    }) {
    throw new Error('Method not implemented.');
  }




}
