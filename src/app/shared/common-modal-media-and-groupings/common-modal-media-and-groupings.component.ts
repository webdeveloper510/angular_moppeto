import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  inputLabel: string;
  dropdownLabel1: string;
  dropdownLabel2: string;
  inputLabelAddNewCountry: string;
  inputLabelAddNewCountry2: string;
  dropdownSection: boolean;
  inputTextSection: boolean;
  addButton: boolean;
  editButton: boolean;
  yesButton: boolean;
  okButton: boolean;
  textSection: boolean;
  textSectionHeader1: boolean;
  inputAddNewCountry: boolean;
}

interface Age {
  name: string
}

interface Age2 {
  name: string
}


@Component({
  selector: 'app-common-modal-media-and-groupings',
  templateUrl: './common-modal-media-and-groupings.component.html',
  styleUrls: ['./common-modal-media-and-groupings.component.scss']
})
export class CommonModalMediaAndGroupingsComponent implements OnInit {
  dialogData: DialogData;
  title: string;
  inputLabel: string;
  dropdownLabel1: string;
  dropdownLabel2: string;
  inputLabelAddNewCountry: string;
  dropdownSection: boolean;
  inputTextSection: boolean;
  addButton: boolean;
  editButton: boolean;
  yesButton: boolean;
  okButton: boolean;
  textSection: boolean;
  textSectionHeader1: boolean;
  inputAddNewCountry: boolean;


  charLength: string;
  charLengthInput2: string;
  charLengthInput3: string;

  age: Age[];
  selectedAge: Age;

  age2: Age2[];
  selectedAge2: Age2;


  constructor(
    public dialogRef: MatDialogRef<CommonModalMediaAndGroupingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.age = [
      { name: 'India' },
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'Paris' }
    ];
    this.age2 = [
      { name: 'India' },
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'Paris' }
    ];
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
