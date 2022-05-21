import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-add-area-region',
  templateUrl: './add-area-region.component.html',
  styleUrls: ['./add-area-region.component.scss']
})
export class AddAreaRegionComponent implements OnInit {


  regionForm: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<AddAreaRegionComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  public createForm(): void {
    this.regionForm = this.formBuilder.group({
      name: ['', [Validators.required, RxwebValidators.unique()]]
    });
  }

  onSubmit() {
    if (this.regionForm.invalid)
      return;
    this.dialogRef.close(this.regionForm.value.name);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}
