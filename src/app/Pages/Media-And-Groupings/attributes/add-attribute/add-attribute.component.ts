import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddCountryComponent } from 'src/app/Pages/Countries/add-country/add-country.component';
import { AddCountry, Curreny } from 'src/app/Pages/Countries/country.model';

@Component({
  selector: 'app-add-attribute',
  templateUrl: './add-attribute.component.html',
  styleUrls: ['./add-attribute.component.scss']
})
export class AddAttributeComponent implements OnInit {

  attributeForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddCountryComponent>,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  public createForm(): void {
    this.attributeForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.attributeForm.invalid)
      return;
    this.dialogRef.close(this.attributeForm.value);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}
