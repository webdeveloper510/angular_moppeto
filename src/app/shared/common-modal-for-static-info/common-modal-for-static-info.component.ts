import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  textSection: boolean;
  suspendOrReInstateBodyText: string;
  email;
}

@Component({
  selector: 'app-common-modal-for-static-info',
  templateUrl: './common-modal-for-static-info.component.html',
  styleUrls: ['./common-modal-for-static-info.component.scss']
})
export class CommonModalForStaticInfoComponent implements OnInit {

  title: string;
  textSection: boolean;
  suspendOrReInstateBodyText: string;
  contactForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CommonModalForStaticInfoComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
  }

  ngOnInit() {
    this.createForm();
  }

  
  public createForm(): void {
    this.contactForm = this.formBuilder.group({
      contactemail: ['', [Validators.required, Validators.email]]
    });
    if(this.data.email) {
      this.contactForm.controls.contactemail.setValue(this.data.email);
    }
  }

  public onConfirm<T>(): void {
    this.dialogRef.close(this.contactForm.value.contactemail);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}
